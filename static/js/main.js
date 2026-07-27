document.addEventListener("DOMContentLoaded", () => {
  // 1. Header scroll & back to top button
  const navbar = document.getElementById("navbar");
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    if (scrollTopBtn) {
      if (window.scrollY > 400) {
        scrollTopBtn.style.display = "flex";
      } else {
        scrollTopBtn.style.display = "none";
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 2. Contact Form Submission
  const contactForm = document.getElementById("contactForm");
  const contactSuccess = document.getElementById("contactSuccess");
  if (contactForm && contactSuccess) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      contactForm.style.display = "none";
      contactSuccess.style.display = "block";
      setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = "flex";
        contactSuccess.style.display = "none";
      }, 5000);
    });
  }

  // 3. AI Copilot Toggle & Chat API Call
  const copilotBtn = document.getElementById("copilotBtn");
  const copilotModal = document.getElementById("copilotModal");
  const copilotClose = document.getElementById("copilotClose");
  const copilotInput = document.getElementById("copilotInput");
  const copilotSend = document.getElementById("copilotSend");
  const copilotBody = document.getElementById("copilotBody");

  if (copilotBtn && copilotModal && copilotClose) {
    copilotBtn.addEventListener("click", () => {
      copilotModal.classList.toggle("active");
    });
    copilotClose.addEventListener("click", () => {
      copilotModal.classList.remove("active");
    });
  }

  const sendMessage = async () => {
    const text = copilotInput.value.trim();
    if (!text) return;

    // Append User Message Bubble
    const userBubble = document.createElement("div");
    userBubble.className = "msg-bubble msg-user";
    userBubble.textContent = text;
    copilotBody.appendChild(userBubble);

    copilotInput.value = "";
    copilotBody.scrollTop = copilotBody.scrollHeight;

    // Fetch Bot Reply from Python Flask Backend
    try {
      const response = await fetch("/api/copilot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
      });
      const data = await response.json();

      const botBubble = document.createElement("div");
      botBubble.className = "msg-bubble msg-bot";
      botBubble.textContent = data.reply || "Thank you for reaching out!";
      copilotBody.appendChild(botBubble);
      copilotBody.scrollTop = copilotBody.scrollHeight;
    } catch (err) {
      console.error("AI Copilot Error:", err);
    }
  };

  if (copilotSend && copilotInput) {
    copilotSend.addEventListener("click", sendMessage);
    copilotInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendMessage();
    });
  }
});

// Copy Email Helper Function
function copyEmail() {
  const emailText = "aleeshaanas2@gmail.com";
  navigator.clipboard.writeText(emailText).then(() => {
    const btn = document.getElementById("emailCopyBtn");
    const textSpan = document.getElementById("emailText");
    if (textSpan && btn) {
      const originalText = textSpan.textContent;
      textSpan.textContent = "Copied to Clipboard! ✓";
      btn.style.borderColor = "#4ADE80";
      setTimeout(() => {
        textSpan.textContent = originalText;
        btn.style.borderColor = "rgba(255, 255, 255, 0.12)";
      }, 2500);
    }
  }).catch((err) => {
    console.error("Failed to copy email:", err);
  });
}

// Modal functions for case studies
function openModal(title, desc, tags, link) {
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalTags = document.getElementById("modalTags");
  const modalLink = document.getElementById("modalLink");

  if (modal && modalTitle && modalDesc && modalTags && modalLink) {
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalTags.textContent = tags;
    modalLink.href = link;
    modal.classList.add("active");
  }
}

function closeModal() {
  const modal = document.getElementById("projectModal");
  if (modal) {
    modal.classList.remove("active");
  }
}
