
export function setLang() {
  const t = {
    nav_home: "Home",
    nav_services: "Services",
    nav_plans: "Plans",
    nav_contact: "Contact",
    login: "Log in",

about_product_p1:
        "SafeHome Smart Security System is an IoT-based platform designed to provide real-time monitoring and comprehensive protection for modern homes.",

    about_product_p2:
        "It integrates smart sensors, surveillance cameras, and a centralized web application, allowing users to detect intrusions, gas leaks, water leaks, and other risks from anywhere.",

    about_product_p3:
        "Our goal is to deliver intelligent, accessible, and reliable home security through innovative technology.",

    hero_title: "SafeHome",
    hero_subtitle: "The science of protecting what matters most",
    hero_desc: "Your home is part of your family. Protect it with intelligent security designed to prevent theft, detect leaks and keep you alert.",
    hero_cta: "Get started",


    contact_title_side: "Take full control of your home",
    contact_desc_side: "Have questions? Contact us via WhatsApp or social networks.",


    services_title: "Services",
    service_1_title: "Intrusion & leak detection",
    service_1_desc: "Smart sensors that detect water, smoke, and unauthorized access.",
    service_2_title: "Full remote control",
    service_2_desc: "Manage your home from your smartphone anytime.",
    service_3_title: "Disaster prevention",
    service_3_desc: "An integrated system that anticipates risks and protects your home.",


    learn_more: "Learn more",
    about_team: "About the team",
    about_product: "About the product",
    team_desc: "Meet the team behind SafeHome, committed to your safety.",
    product_desc: "Discover how SafeHome can transform your home security.",


    plans_title: "Choose the best security for your home",
    plans_desc: "Discover which of our plans best suits you.",


    plan_basic: "Basic Plan",
    plan_basic_label: "(Free)",
    plan_basic_price: "$0.00 / month",
    plan_basic_desc: "Ideal for trying out the basic monitoring experience.",
    plan_basic_includes: "Includes:",
    plan_basic_feat1: "Live camera access: Real-time transmission (standard quality).",
    plan_basic_feat2: "Basic motion alerts: Push notifications on mobile.",
    plan_basic_feat3: "Event history (24h): Check what happened in the last day.",
    plan_basic_feat4: "1 admin user: Control from a single device.",
    plan_basic_feat5: "Community support: Access to guides and FAQs.",


    plan_premium: "Premium Plan",
    plan_premium_price: "$49.90 / month",
    plan_premium_desc: "The ultimate plan for comprehensive 360° protection using all the power of IoT.",
    plan_premium_includes: "Includes everything from the Essential Plan, plus:",
    plan_premium_feat1: "Advanced leak detection: Smart sensors for gas, water and smoke with emergency alert.",
    plan_premium_feat2: "Unlimited HD cameras: Full connection of all your devices with premium night vision.",
    plan_premium_feat3: "Service control: Remote shutdown of lights or water/gas passage in case of anomaly.",
    plan_premium_feat4: "Cloud storage (30 days): Continuous recording and security backup.",
    plan_premium_feat5: "Multi-user family: Access for up to 5 family members with personalized permissions.",
    plan_premium_feat6: "Priority 24/7 assistance: Direct chat with our technical team.",
    plan_premium_feat7: "Anomalous sound detection: Specific alert if broken glass or external alarms are heard.",


    select_btn: "Select",


    testimonials_title: "Experiences that inspire",
    testimonial_1: "SafeHome gives me complete peace of mind. I can monitor my home anytime.",
    testimonial_2: "Setup was simple and the system is very intuitive.",
    testimonial_3: "Everything is centralized in one place. Highly recommended.",


    contact_title: "Contact us",
    contact_name: "First name",
    contact_lastname: "Last name",
    contact_email: "Email",
    contact_message: "Message",
    contact_send: "Send",

    team_safe_home: "Team Safe Home",
    footer_text: "The science of protecting what matters most",
    footer_rights: "© 2026 All rights reserved",
    learn_more: "Learn More",
about_product: "About the Product",
about_team: "About the Team"
    


  };


  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
}
