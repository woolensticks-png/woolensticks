"use client";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919999999999?text=Hi%20Woolen%20Sticks!%20I%20found%20you%20on%20your%20website%20and%20want%20to%20place%20an%20order%20%F0%9F%A7%B6"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300 animate-bounce-soft"
    >
      {/* WhatsApp SVG icon */}
      <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.837.737 5.5 2.027 7.82L0 32l8.4-2.007A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.294 22.614c-.346.967-2.014 1.857-2.773 1.954-.713.09-1.61.127-2.6-.163-.597-.176-1.363-.41-2.347-.81-4.133-1.73-6.833-5.893-7.037-6.167-.2-.273-1.64-2.18-1.64-4.16 0-1.98 1.04-2.953 1.41-3.353.346-.363.76-.453 1.013-.453.253 0 .507.003.727.013.23.01.543-.087.853.65.32.76 1.087 2.627 1.18 2.82.093.193.16.42.033.673-.12.247-.187.4-.373.62-.187.22-.393.49-.56.66-.187.19-.38.4-.163.787.217.387.963 1.587 2.067 2.573 1.42 1.273 2.617 1.667 2.987 1.857.373.193.587.16.807-.097.22-.253.947-1.103 1.2-1.483.247-.38.5-.317.84-.19.34.127 2.167 1.02 2.54 1.207.373.187.62.28.713.433.093.153.093.887-.253 1.853z" />
      </svg>
    </a>
  );
}
