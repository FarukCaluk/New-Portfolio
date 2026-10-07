"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

/** Gyroscope rings + octahedron core. Renders only while on screen and the tab is visible. */
export default function ThreeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.innerWidth < 768;
    const W = el.clientWidth, H = el.clientHeight;

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 200);
    camera.position.set(0, 0, 22);

    const renderer = new THREE.WebGLRenderer({ antialias: !small, alpha: true, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1 : 1.5));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const mat = (opacity: number, wireframe = true) =>
      new THREE.MeshBasicMaterial({ color: 0xc9a96e, wireframe, transparent: true, opacity });

    const rings = [
      { r: 6.5,  tube: 0.025, rot: [0.4, 0.0, 0.0],  speed: [0.0012, 0.0018, 0.0],     opacity: 0.45 },
      { r: 8.8,  tube: 0.018, rot: [0.0, 0.4, 0.3],  speed: [0.0022, 0.0010, 0.001],   opacity: 0.28 },
      { r: 11.5, tube: 0.012, rot: [1.1, 0.2, 0.6],  speed: [-0.0008, 0.0014, 0.0005], opacity: 0.16 },
    ].map(({ r, tube, rot, speed, opacity }) => {
      const mesh = new THREE.Mesh(new THREE.TorusGeometry(r, tube, 4, 120), mat(opacity));
      mesh.rotation.set(rot[0], rot[1], rot[2]);
      scene.add(mesh);
      return { mesh, speed };
    });

    const core = new THREE.Mesh(new THREE.OctahedronGeometry(1.1, 0), mat(0.55));
    scene.add(core);

    const enso = new THREE.Mesh(new THREE.TorusGeometry(14, 0.008, 3, 160), mat(0.07, false));
    enso.rotation.x = 0.2;
    scene.add(enso);

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: MouseEvent) => {
      mouse.tx = e.clientX / window.innerWidth - 0.5;
      mouse.ty = e.clientY / window.innerHeight - 0.5;
    };
    if (!small) window.addEventListener("mousemove", onMove, { passive: true });

    const onResize = () => {
      const nw = el.clientWidth, nh = el.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
      renderer.render(scene, camera);
    };
    window.addEventListener("resize", onResize, { passive: true });

    let rafId = 0, running = false, onScreen = true;
    const tick = () => {
      rafId = requestAnimationFrame(tick);
      rings.forEach(({ mesh, speed }) => {
        mesh.rotation.x += speed[0];
        mesh.rotation.y += speed[1];
        mesh.rotation.z += speed[2];
      });
      core.rotation.y += 0.006;
      core.rotation.x += 0.003;
      enso.rotation.z += 0.0004;
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      camera.position.x = mouse.x * 3;
      camera.position.y = -mouse.y * 2;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };

    const sync = () => {
      const should = onScreen && !document.hidden && !reduced;
      if (should && !running) { running = true; tick(); }
      else if (!should && running) { running = false; cancelAnimationFrame(rafId); }
    };

    const io = new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; sync(); });
    io.observe(el);
    document.addEventListener("visibilitychange", sync);
    renderer.render(scene, camera);
    sync();

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      scene.traverse((o) => {
        if (o instanceof THREE.Mesh) { o.geometry.dispose(); (o.material as THREE.Material).dispose(); }
      });
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
}
