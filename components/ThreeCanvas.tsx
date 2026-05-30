"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Athletic Three.js Hero — Three concentric rings (gyroscope / Enso).
 * Evokes: training cycles, Kaizen loops, martial arts discipline.
 * Very lightweight: ~6 mesh objects total, no particles, no line calculations.
 */
export default function ThreeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const W = el.clientWidth, H = el.clientHeight;

    /* ── Scene / Camera / Renderer ── */
    const scene    = new THREE.Scene();
    const camera   = new THREE.PerspectiveCamera(55, W / H, 0.1, 200);
    camera.position.set(0, 0, 22);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    /* ── Gold materials ── */
    const makeGoldMat = (opacity: number) =>
      new THREE.MeshBasicMaterial({
        color: 0xc9a96e,
        wireframe: true,
        transparent: true,
        opacity,
      });

    /* ── Rings (torus) — 3 concentric at different orientations ── */
    const ringData = [
      { r: 6.5,  tube: 0.025, rot: [0.4, 0.0, 0.0],       speed: [0.0012, 0.0018, 0.0], opacity: 0.45 },
      { r: 8.8,  tube: 0.018, rot: [0.0, 0.4, 0.3],        speed: [0.0022, 0.0010, 0.001], opacity: 0.28 },
      { r: 11.5, tube: 0.012, rot: [1.1, 0.2, 0.6],        speed: [-0.0008, 0.0014, 0.0005], opacity: 0.16 },
    ];

    const rings = ringData.map(({ r, tube, rot, opacity }) => {
      const geo  = new THREE.TorusGeometry(r, tube, 4, 120);
      const mat  = makeGoldMat(opacity);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.set(...(rot as [number, number, number]));
      scene.add(mesh);
      return { mesh, ...{ speed: ringData[ringData.indexOf(ringData.find(d => d.r === r)!)].speed } };
    });

    /* ── Central octahedron — represents the athlete's core ── */
    const coreGeo  = new THREE.OctahedronGeometry(1.1, 0);
    const coreMat  = new THREE.MeshBasicMaterial({ color: 0xc9a96e, wireframe: true, transparent: true, opacity: 0.55 });
    const core     = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    /* ── Outer faint enso ring ── */
    const ensoGeo  = new THREE.TorusGeometry(14, 0.008, 3, 160);
    const ensoMat  = new THREE.MeshBasicMaterial({ color: 0xc9a96e, transparent: true, opacity: 0.07 });
    const enso     = new THREE.Mesh(ensoGeo, ensoMat);
    enso.rotation.x = 0.2;
    scene.add(enso);

    /* ── Mouse parallax ── */
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: MouseEvent) => {
      mouse.tx = (e.clientX / window.innerWidth  - 0.5);
      mouse.ty = (e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    /* ── Resize ── */
    const onResize = () => {
      const nw = el.clientWidth, nh = el.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize, { passive: true });

    /* ── Animation loop ── */
    const speeds = [
      [0.0012, 0.0018, 0.0],
      [0.0022, 0.0010, 0.001],
      [-0.0008, 0.0014, 0.0005],
    ];

    let rafId: number;
    const tick = () => {
      rafId = requestAnimationFrame(tick);

      /* Rotate each ring on its own axes */
      rings.forEach(({ mesh }, i) => {
        mesh.rotation.x += speeds[i][0];
        mesh.rotation.y += speeds[i][1];
        mesh.rotation.z += speeds[i][2];
      });

      /* Core slow spin */
      core.rotation.y += 0.006;
      core.rotation.x += 0.003;

      /* Enso slow drift */
      enso.rotation.z += 0.0004;

      /* Smooth mouse parallax */
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      camera.position.x = mouse.x * 3;
      camera.position.y = -mouse.y * 2;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
}
