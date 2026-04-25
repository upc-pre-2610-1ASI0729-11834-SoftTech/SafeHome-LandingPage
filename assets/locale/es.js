export function setLang() {
  const t = {
    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_plans: "Planes",
    nav_contact: "Contacto",
    login: "Iniciar sesión",


    hero_title: "SafeHome",
    hero_subtitle: "La ciencia de proteger lo que más quieres",
    hero_desc: "Tu hogar es parte de tu familia. Protégelo con seguridad inteligente capaz de prevenir robos, detectar fugas y alertarte en tiempo real.",
    hero_cta: "Empieza ahora",


    contact_title_side: "Toma el control total de tu hogar",
    contact_desc_side: "¿Tienes dudas? Contáctanos por WhatsApp o redes sociales.",


    services_title: "Servicios",
    service_1_title: "Detección de fugas e intrusos",
    service_1_desc: "Sensores inteligentes que detectan agua, humo y accesos no autorizados.",
    service_2_title: "Control remoto completo",
    service_2_desc: "Controla tu hogar desde tu smartphone en cualquier momento.",
    service_3_title: "Prevención de desastres",
    service_3_desc: "Sistema integral que anticipa riesgos y protege tu hogar.",


    learn_more: "Conoce más",
    about_team: "Sobre el equipo",
    about_product: "Sobre el producto",
    team_desc: "Conoce al equipo detrás de SafeHome, comprometido con tu seguridad.",
    product_desc: "Descubre cómo SafeHome puede transformar la seguridad de tu hogar.",


    plans_title: "Elige la mejor seguridad para tu hogar",
    plans_desc: "Descubre cuál de nuestros planes se adapta mejor a ti.",


    plan_basic: "Plan Básico",
    plan_basic_label: "(Gratuito)",
    plan_basic_price: "S/.0.00 /mes",
    plan_basic_desc: "Ideal para probar la experiencia básica de monitoreo.",
    plan_basic_includes: "Incluye:",
    plan_basic_feat1: "Acceso a cámara en vivo: Transmisión en tiempo real (calidad estándar).",
    plan_basic_feat2: "Alertas de movimiento básicas: Notificaciones push en el celular.",
    plan_basic_feat3: "Historial de eventos (24h): Revisa lo sucedido en el último día.",
    plan_basic_feat4: "1 Usuario administrador: Control desde un solo dispositivo.",
    plan_basic_feat5: "Soporte vía comunidad: Acceso a guías y FAQs.",


    plan_premium: "Plan Premium",
    plan_premium_price: "S/.49.90 /mes",
    plan_premium_desc: "El plan definitivo para una protección integral 360° utilizando todo el poder del IoT.",
    plan_premium_includes: "Incluye todo lo del Plan Esencial, más:",
    plan_premium_feat1: "Detección Avanzada de Fugas: Sensores inteligentes para gas, agua y humo con alerta de emergencia.",
    plan_premium_feat2: "Cámaras Ilimitadas en HD: Conexión total de todos tus dispositivos con visión nocturna premium.",
    plan_premium_feat3: "Control de Servicios: Apagado remoto de luces o paso de agua/gas en caso de anomalía.",
    plan_premium_feat4: "Almacenamiento en la Nube (30 días): Grabación continua y respaldo de seguridad.",
    plan_premium_feat5: "Multiusuario Familiar: Acceso para hasta 5 miembros de la familia con permisos personalizados.",
    plan_premium_feat6: "Asistencia Prioritaria 24/7: Chat directo con nuestro equipo técnico.",
    plan_premium_feat7: "Detección de Sonidos Anómalos: Alerta específica si se escuchan cristales rotos o alarmas externas.",


    select_btn: "Seleccionar",


    testimonials_title: "Experiencias que inspiran",
    testimonial_1: "SafeHome me da tranquilidad total. Puedo monitorear mi casa en cualquier momento.",
    testimonial_2: "La instalación fue sencilla y el sistema es muy intuitivo.",
    testimonial_3: "Todo está centralizado en un solo lugar. Muy recomendado.",


    contact_title: "Contáctanos",
    contact_name: "Nombre",
    contact_lastname: "Apellido",
    contact_email: "Correo electrónico",
    contact_message: "Mensaje",
    contact_send: "Enviar",


    footer_text: "La ciencia de proteger lo que más quieres",
    footer_rights: "© 2026 Todos los derechos reservados"
  };


  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
}

