"use client";

import { useLoaded } from "@/providers/LoadingProvider";
import { motion, AnimatePresence } from "framer-motion";

const WhatsappButton = () => {
  const { loaded } = useLoaded();

  const phoneNumber = "6281563862944";
  const message = "Halo, saya ingin bertanya...";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      {loaded && (
        <motion.a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
          aria-label="Chat via WhatsApp"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="30"
            height="30"
            fill="white"
          >
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.49 2.027 7.8L0 32l8.418-2.004A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.765-1.847l-.485-.287-5.002 1.191 1.217-4.873-.317-.5A13.246 13.246 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.354-1.162-2.719-1.294-.365-.133-.63-.199-.896.199-.265.398-1.03 1.294-1.262 1.56-.232.265-.465.298-.863.1-.398-.199-1.681-.62-3.202-1.977-1.183-1.057-1.982-2.362-2.214-2.76-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.697.199-.232.265-.398.398-.664.133-.265.066-.497-.033-.697-.1-.199-.896-2.16-1.228-2.957-.323-.776-.651-.671-.896-.683l-.763-.013c-.265 0-.697.1-.1.063 1.495-.232 2.694 1.428 2.694 1.428s.927 2.892 1.03 3.224c.1.332.398.664.93.531.265-.066 1.695-.22 3.224-1.99.199-.232.265-.398.365-.265.1.133.066.398-.033.597z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default WhatsappButton;