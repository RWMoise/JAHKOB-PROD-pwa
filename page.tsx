
'use client';
import { useState } from "react";

export default function Home() {
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");

  return (
    <main style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Jour 1 – Introduction à la production musicale</h1>
      <p>Bienvenue ! Voici le quiz du jour :</p>

      <div>
        <h2>1. Quel logiciel est le plus utilisé ?</h2>
        <label><input type="radio" name="q1" onChange={() => setQ1("FL Studio")} /> FL Studio</label><br />
        <label><input type="radio" name="q1" onChange={() => setQ1("Word")} /> Microsoft Word</label><br />
        <label><input type="radio" name="q1" onChange={() => setQ1("Excel")} /> Excel</label><br />
      </div>

      <div style={{ marginTop: 20 }}>
        <h2>2. Quels sont les 3 éléments essentiels dans une bonne production musicale ?</h2>
        <textarea rows={4} cols={40} onChange={(e) => setQ2(e.target.value)} value={q2} placeholder="Ta réponse ici..." />
      </div>

      <div style={{ marginTop: 20 }}>
        <strong>Réponses enregistrées :</strong><br />
        Q1: {q1 || "Non répondu"}<br />
        Q2: {q2 || "Non répondu"}
      </div>
    </main>
  );
}
