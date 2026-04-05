// --- Año dinámico ---
document.getElementById("year").textContent = new Date().getFullYear();

// --- Traducciones ---
const translations = {
  es: {
    logo: "Edison Garzón",
    nav_inicio: "Inicio",
    nav_sobre: "Sobre mí",
    nav_habilidades: "Mis Habilidades",
    nav_formacion: "Formación",
    nav_experiencia: "Experiencia",
    nav_proyectos: "Proyectos",
    nav_certificados: "Certificados",
    nav_contacto: "Contacto",

    inicio_titulo: "Hola, soy Edison Garzón",
    inicio_desc: "Estudiante de Administración de Sistemas Informáticos en Red, con experiencia en soporte técnico, administración de servidores y desarrollo web con Python y Flask. Me apasiona la tecnología, la automatización y la mejora continua de procesos IT.",
    btn_cv: "Descargar CV",

    sobre_titulo: "Sobre mí",
    sobre_desc: "Soy adaptable, disciplinado y con una gran capacidad de aprendizaje. Vivo en Vilafranca del Penedès y siempre doy lo mejor de mí en cualquier ámbito, comprometiéndome con los objetivos que me planteo y trabajando de forma proactiva para alcanzarlos. Frente a los desafíos técnicos actúo con iniciativa y orientación a resultados, buscando soluciones eficaces y medibles. Me gusta profundizar en aquello que no conozco e investigo de forma autónoma para adquirir el conocimiento necesario y evitar repetir errores en el futuro. Fuera del trabajo hago ejercicio regularmente como parte de mi rutina para mantenerme en salud y mejorar mi rendimiento físico y mental.",

    habilidades_titulo: "Mis Habilidades",
    skill_sistemas: "Sistemas y Servidores",
    skill_virtual: "Virtualización, Almacenamiento y Backups",
    skill_redes: "Redes y Seguridad",
    skill_soporte: "Soporte, Servicios y Scripting",

    formacion_titulo: "Formación Académica",
    form1_titulo: "CFGS Administración de Sistemas Informáticos en Red",
    form1_desc: "Institut Joaquim Mir (España) — 2024–2026 (en curso)",
    form2_titulo: "Bachillerato Técnico en Servicios Contables",
    form2_desc: "Unidad Educativa Santa María de los Ángeles (Ecuador)",
    form3_titulo: "Ofimática",
    form3_desc: "Universidad Agraria del Ecuador — Manejo avanzado de herramientas de Microsoft Office y gestión documental",

    exp_titulo: "Experiencia Profesional",
    exp1_titulo: "Técnico Helpdesk – GESTINET",
    exp1_fecha: "Vilafranca del Penedès | Febrero 2025 – Julio 2025",
    exp1_1: "Soporte técnico Nivel 1 y 2 a usuarios (remoto/presencial).",
    exp1_2: "Administración de servidores Linux y recursos compartidos (Samba/SMB).",
    exp1_3: "Administración de identidades (Active Directory local, Microsoft 365, Entra ID).",
    exp1_4: "Gestión de tickets (Zammad) y monitorización proactiva (Tactical RMM).",

    exp2_titulo: "Técnico de Soporte y montaje informático – Compumundo Store",
    exp2_fecha: "Guayaquil, Ecuador | Diciembre 2023 – Agosto 2024",
    exp2_1: "Ensamblaje y configuración de PCs, instalación de drivers y software.",
    exp2_2: "Atención al cliente en tienda y asesoramiento tecnológico.",
    exp2_3: "Control de stock e inventario, reporte de productos faltantes.",
    exp2_4: "Soporte técnico básico en equipos y periféricos.",

    exp3_titulo: "Dependiente Polivalente / Cajero – Marathon Sports",
    exp3_fecha: "Guayaquil, Ecuador | Abril 2023 – Octubre 2023",
    exp3_1: "Atención y asesoramiento en área deportiva.",
    exp3_2: "Gestión de caja, arqueo y cierres diarios.",
    exp3_3: "Organización de stock y reposición de productos.",
    exp3_4: "Cumplimiento de metas de ventas y satisfacción del cliente.",

    proy_titulo: "Proyectos Destacados",
    proy3_titulo: "Simulación Clúster HPC con Docker y Bacula",
    proy3_desc: "Despliegue automatizado de un entorno de computación de alto rendimiento (OpenMPI) y respaldos empresariales (Bacula) en contenedores Docker sobre almacenamiento LVM.",
    proy1_titulo: "Proyecto MIBDB_SNMP",
    proy1_desc: "Monitorización de red con SNMP y base de datos MIB para diagnóstico de dispositivos.",
    proy2_titulo: "Proyecto FLASK_RSS_CSS",
    proy2_desc: "Aplicación web en Flask que integra fuentes RSS y ofrece una interfaz responsiva y moderna usando CSS.",

    cert_titulo: "Certificados",

    contacto_titulo: "Contacto",
    contacto_mail: "egarzonmonroy8021@gmail.com",
    contacto_linkedin: "LinkedIn",

    footer_txt: "Edison Garzón · Portafolio Profesional"
  },

  ca: {
    logo: "Edison Garzón",
    nav_inicio: "Inici",
    nav_sobre: "Sobre mi",
    nav_habilidades: "Habilitats",
    nav_formacion: "Formació",
    nav_experiencia: "Experiència",
    nav_proyectos: "Projectes",
    nav_certificados: "Certificats",
    nav_contacto: "Contacte",

    inicio_titulo: "Hola, soc Edison Garzón",
    inicio_desc: "Estudiant d'Administració de Sistemes Informàtics en Xarxa, amb experiència en suport tècnic, administració de servidors i desenvolupament web amb Python i Flask. M'apassiona la tecnologia, l'automatització i la millora contínua de processos IT.",
    btn_cv: "Descarregar CV",

    sobre_titulo: "Sobre mi",
    sobre_desc: "Soc adaptable, disciplinat i amb una gran capacitat d'aprenentatge. Visc a Vilafranca del Penedès i sempre dono el millor de mi en qualsevol àmbit, comprometent-me amb els objectius que em plantejo i treballant de manera proactiva per a aconseguir-los. Enfront dels desafiaments tècnics actuo amb iniciativa i orientació a resultats, buscant solucions eficaces i mesurables. M'agrada aprofundir en allò que no conec i investigo de manera autònoma per a adquirir el coneixement necessari i evitar repetir errors en el futur. Fora del treball faig exercici regularment com a part de la meva rutina per a mantenir-me en salut i millorar el meu rendiment físic i mental.",

    habilidades_titulo: "Habilitats",
    skill_sistemas: "Sistemes i Servidors",
    skill_virtual: "Virtualització, Emmagatzematge i Backups",
    skill_redes: "Xarxes i Seguretat",
    skill_soporte: "Suport, Serveis i Scripting",

    formacion_titulo: "Formació Acadèmica",
    form1_titulo: "CFGS Administració de Sistemes Informàtics en Xarxa",
    form1_desc: "Institut Joaquim Mir (Espanya) — 2024–2026 (en curs)",
    form2_titulo: "Batxillerat Tècnic en Serveis Comptables",
    form2_desc: "Unitat Educativa Santa María de los Ángeles (Equador)",
    form3_titulo: "Ofimàtica",
    form3_desc: "Universitat Agrària de l'Equador — Maneig avançat d'eines de Microsoft Office i gestió documental",

    exp_titulo: "Experiència Professional",
    exp1_titulo: "Tècnic Helpdesk – GESTINET",
    exp1_fecha: "Vilafranca del Penedès | Febrer 2025 – Juliol 2025",
    exp1_1: "Suport tècnic Nivell 1 i 2 a usuaris (remot/presencial).",
    exp1_2: "Administració de servidors Linux i recursos compartits (Samba/SMB).",
    exp1_3: "Administració d'identitats (Active Directory local, Microsoft 365, Entra ID).",
    exp1_4: "Gestió de tiquets (Zammad) i monitoratge proactiu (Tactical RMM).",

    exp2_titulo: "Tècnic de Suport i muntatge informàtic – Compumundo Store",
    exp2_fecha: "Guayaquil, Equador | Desembre 2023 – Agost 2024",
    exp2_1: "Muntatge i configuració de PCs, instal·lació de drivers i programari.",
    exp2_2: "Atenció al client i assessorament tecnològic.",
    exp2_3: "Control d'estoc i inventari, reporti de productes que manca.",
    exp2_4: "Suport tècnic bàsic en eqips i perifèrics.",

    exp3_titulo: "Dependent / Caixer – Marathon Sports",
    exp3_fecha: "Guayaquil, Equador | Abril 2023 – Octubre 2023",
    exp3_1: "Atenció i assessorament esportiu.",
    exp3_2: "Gestió de caixa.",
    exp3_3: "Organització d'estoc.",
    exp3_4: "Compliment d'objectius.",

    proy_titulo: "Projectes Destacats",
    proy3_titulo: "Simulació Clúster HPC amb Docker i Bacula",
    proy3_desc: "Desplegament automatitzat d'un entorn de computació d'alt rendiment (OpenMPI) i respatllers empresarials (Bacula) en contenidors Docker sobre emmagatzematge LVM.",
    proy1_titulo: "Projecte MIBDB_SNMP",
    proy1_desc: "Monitoratge de xarxa amb SNMP i base de dades MIB per a diagnòstic de dispositius.",
    proy2_titulo: "Projecte FLASK_RSS_CSS",
    proy2_desc: "Aplicació web amb Flask que integra fonts RSS i ofereix una interfície responsiva i moderna amb CSS.",

    cert_titulo: "Certificats",

    contacto_titulo: "Contacte",
    contacto_mail: "egarzonmonroy8021@gmail.com",
    contacto_linkedin: "LinkedIn",

    footer_txt: "Edison Garzón · Portafoli Professional"
  },

  en: {
    logo: "Edison Garzón",
    nav_inicio: "Home",
    nav_sobre: "About me",
    nav_habilidades: "Skills",
    nav_formacion: "Education",
    nav_experiencia: "Experience",
    nav_proyectos: "Projects",
    nav_certificados: "Certificates",
    nav_contacto: "Contact",

    inicio_titulo: "Hi, I'm Edison Garzón",
    inicio_desc: "Student of Networked Computer Systems Administration with experience in technical support, server administration, and web development using Python and Flask. I am passionate about technology, automation, and continuous improvement of IT processes.",
    btn_cv: "Download CV",

    sobre_titulo: "About me",
    sobre_desc: "I am adaptable, disciplined and have strong learning ability . I live in Vilafranca del Penedès and always give my best in any field, committing to the goals I set and working proactively to achieve them. When faced with technical challenges, I act with initiative and results orientation, seeking effective and measurable solutions. I like to delve into what I don't know and research autonomously to acquire the necessary knowledge and avoid repeating mistakes in the future. Outside of work, I exercise regularly as part of my routine to stay healthy and improve my physical and mental performance.",

    habilidades_titulo: "My Skills",
    skill_sistemas: "Systems & Servers",
    skill_virtual: "Virtualization, Storage & Backups",
    skill_redes: "Networks & Security",
    skill_soporte: "Support, Services & Scripting",

    formacion_titulo: "Academic Background",
    form1_titulo: "Higher Degree in Networked Computer Systems Administration",
    form1_desc: "Institut Joaquim Mir (Spain) — 2024–2026 (in progress)",
    form2_titulo: "Technical High School in Accounting Services",
    form2_desc: "Santa María de los Ángeles Educational Unit (Ecuador)",
    form3_titulo: "Office Automation",
    form3_desc: "Agrarian University of Ecuador — Advanced Office management",

    exp_titulo: "Professional Experience",
    exp1_titulo: "Helpdesk Technician – GESTINET",
    exp1_fecha: "Vilafranca del Penedès | Feb 2025 – Jul 2025",
    exp1_1: "Level 1 and 2 technical support for users (remote/onsite).",
    exp1_2: "Linux server administration and shared resources (Samba/SMB).",
    exp1_3: "Identity management (local Active Directory, Microsoft 365, Entra ID).",
    exp1_4: "Ticket management (Zammad) and proactive monitoring (Tactical RMM).",

    exp2_titulo: "IT Support Technician – Compumundo Store",
    exp2_fecha: "Guayaquil, Ecuador | Dec 2023 – Aug 2024",
    exp2_1: "PC assembly and configuration including driver and software installation.",
    exp2_2: "Customer service and tech advising in-store.",
    exp2_3: "Stock control and inventory management, reporting missing products.",
    exp2_4: "Basic technical support for equipment and peripherals.",

    exp3_titulo: "Sales Assistant / Cashier – Marathon Sports",
    exp3_fecha: "Guayaquil, Ecuador | Apr 2023 – Oct 2023",
    exp3_1: "Customer assistance in sports area.",
    exp3_2: "Cash management and daily closings.",
    exp3_3: "Product restocking and stock organization.",
    exp3_4: "Sales and customer satisfaction goals achievement.",

    proy_titulo: "Highlighted Projects",
    proy3_titulo: "HPC Cluster Simulation with Docker and Bacula",
    proy3_desc: "Automated deployment of a High-Performance Computing environment (OpenMPI) and enterprise backups (Bacula) in Docker containers over LVM storage.",
    proy1_titulo: "MIBDB_SNMP Project",
    proy1_desc: "SNMP network monitoring with MIB database for device diagnostics.",
    proy2_titulo: "FLASK_RSS_CSS Project",
    proy2_desc: "Flask app integrating RSS feeds and modern CSS UI.",

    cert_titulo: "Certificates",

    contacto_titulo: "Contact",
    contacto_mail: "egarzonmonroy8021@gmail.com",
    contacto_linkedin: "LinkedIn",

    footer_txt: "Edison Garzón · Professional Portfolio"
  }
};

// --- Cambio de idioma ---
document.getElementById("language-selector").addEventListener("change", function () {
  const lang = this.value;
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    if(translations[lang][key]) {
        el.textContent = translations[lang][key];
    }
  });
});

// --- Fade-in ---
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".fade-in").forEach(section => observer.observe(section));

// --- Fondo animado ---
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.zIndex = "-1";
canvas.style.pointerEvents = "none";
const ctx = canvas.getContext("2d");

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

class ShootingStar {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * w;
    this.y = Math.random() * h / 2;
    this.len = 50 + Math.random() * 100;
    this.speed = 1 + Math.random() * 2;
    this.angle = Math.PI / 4;
    this.opacity = 0.5 + Math.random() * 0.5;
  }
  update() {
    this.x += this.speed * Math.cos(this.angle);
    this.y += this.speed * Math.sin(this.angle);
    this.opacity -= 0.002;
    if (this.opacity <= 0 || this.x > w || this.y > h) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x - this.len * Math.cos(this.angle), this.y - this.len * Math.sin(this.angle));
    ctx.strokeStyle = `rgba(255,255,255,${this.opacity})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

const stars = Array.from({length: 10}, () => new ShootingStar());
(function animate() {
  ctx.clearRect(0,0,w,h);
  stars.forEach(star => { star.update(); star.draw(); });
  requestAnimationFrame(animate);
})();

// --- MODAL PARA CERTIFICADOS (EVENT LISTENERS) ---
const modal = document.getElementById("modalCertificado");
const imgModal = document.getElementById("imgModal");
const certImagen = document.getElementById("certImagen");

if (certImagen) {
  certImagen.addEventListener("click", function() {
    modal.style.display = "flex";
    imgModal.src = this.src;
  });
}

if (modal) {
  modal.addEventListener("click", function() {
    modal.style.display = "none";
  });
}