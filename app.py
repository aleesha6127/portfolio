import os
from datetime import datetime
from flask import Flask, render_template, request, jsonify, send_from_directory

app = Flask(__name__, static_folder='static', template_folder='templates')

# Canned knowledge base for Aleesha's AI Copilot
KNOWLEDGE_BASE = {
    "stack": (
        "Aleesha specializes in Python (Flask), React.js, Next.js, Node.js/Express, RESTful APIs, "
        "and modern database architectures including PostgreSQL, MySQL, MongoDB, and Firebase. "
        "She is also experienced with Tailwind CSS, Git/GitHub, Postman, and SDLC methodologies."
    ),
    "experience": (
        "Aleesha has successfully completed 3 software development internships:\n"
        "1. Frontend Developer at Dodo Interactive (React, Next.js, REST APIs).\n"
        "2. Backend Developer at Fawstech Innovations (Python, Flask, Firebase Datastore).\n"
        "3. Full Stack Developer at ByteMinders Edutech (Node.js, Express, MongoDB)."
    ),
    "contact": (
        "Aleesha is actively seeking Full Stack / Python / React Software Developer roles!\n"
        "• Email: aleeshaanas2@gmail.com\n"
        "• Phone/WhatsApp: +91 9846691678\n"
        "• Location: Kottayam, Kerala, India\n"
        "• LinkedIn: linkedin.com/in/aleesha-anas-a7553533b"
    ),
    "projects": (
        "Aleesha's key projects include:\n"
        "1. Smart Attendance System (Python, Flask, OpenCV facial recognition)\n"
        "2. Hospital Management System (Flask, PostgreSQL REST APIs)\n"
        "3. Electricity Billing & Analysis (IoT Hardware, Firebase Real-Time DB)\n"
        "4. Tourism Management System (MERN Stack Full-Stack Portal)\n"
        "5. TrustShield Women Safety App (React, Express, MongoDB)"
    )
}

@app.route('/')
def home():
    """Renders the main dark luxury portfolio page."""
    current_year = datetime.now().year
    return render_template('index.html', year=current_year)

@app.route('/public/<path:filename>')
def serve_public(filename):
    """Serves files from the root public directory if needed."""
    return send_from_directory('public', filename)

@app.route('/api/copilot', methods=['POST'])
def copilot_api():
    """Python backend API endpoint powering the interactive AI Copilot chat."""
    data = request.get_json() or {}
    user_msg = data.get('message', '').strip().lower()
    
    current_time = datetime.now().strftime("%I:%M %p")

    if not user_msg:
        return jsonify({
            "reply": "Please enter a question or select one of the suggested prompts above!",
            "time": current_time
        })

    # Intent Matching
    if "tech" in user_msg or "stack" in user_msg or "skills" in user_msg or "python" in user_msg:
        reply = KNOWLEDGE_BASE["stack"]
    elif "experience" in user_msg or "intern" in user_msg or "work" in user_msg or "background" in user_msg:
        reply = KNOWLEDGE_BASE["experience"]
    elif "contact" in user_msg or "hire" in user_msg or "email" in user_msg or "phone" in user_msg or "reach" in user_msg:
        reply = KNOWLEDGE_BASE["contact"]
    elif "project" in user_msg or "build" in user_msg or "apps" in user_msg:
        reply = KNOWLEDGE_BASE["projects"]
    else:
        reply = (
            f"Aleesha Anas is an MCA graduate and Software Developer skilled in Python, Flask, React.js, Next.js, and Node.js. "
            f"She builds fast, scalable, production-ready web software. Feel free to contact her directly at aleeshaanas2@gmail.com or +91 9846691678!"
        )

    return jsonify({
        "reply": reply,
        "time": current_time
    })

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
