import { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("enviando");

    try {
      const { sendForm } = await import("emailjs-com");
      await sendForm(
        "SEU_SERVICE_ID",
        "SEU_TEMPLATE_ID",
        formRef.current,
        "SEU_PUBLIC_KEY"
      );
      setStatus("ok");
      formRef.current.reset();
      return;
    } catch (err) {
      console.error(err);
      setStatus("erro");
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="form">
      <input name="from_name" placeholder="Seu nome" required />
      <input type="email" name="reply_to" placeholder="Seu email" required />
      <textarea name="message" placeholder="Sua mensagem" rows={5} required />
      <button type="submit" className="btn btn--primary">Enviar</button>
      {status === "enviando" && <span className="hint">Enviando…</span>}
      {status === "ok" && <span className="hint hint--ok">Mensagem enviada!</span>}
      {status === "erro" && <span className="hint hint--err">Falha ao enviar.</span>}
    </form>
  );
}
