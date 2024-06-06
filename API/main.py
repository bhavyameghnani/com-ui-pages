from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import json

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Directory to save chat details and feedback
output_dir = 'output'
os.makedirs(output_dir, exist_ok=True)

# Hardcoded responses for demonstration
responses = {
    "hello": "Hi there! How can I assist you today?",
    "compliance": "Compliance ensures that a company follows all laws and regulations.",
    "policy": "Our policies are designed to maintain the highest standards of integrity.",
    "default": "I'm not sure how to respond to that. Can you please clarify?"
}

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    query = data.get('query')

    # Determine response
    response = responses.get(query.lower(), responses["default"])

    # Save chat details
    chat_detail_path = os.path.join(output_dir, 'chatdetail.json')
    chat_details = load_json(chat_detail_path)
    chat_details.append({'query': query, 'reply': response})
    save_json(chat_detail_path, chat_details)

    return jsonify({"reply": response})

@app.route('/api/feedback', methods=['POST'])
def feedback():
    data = request.get_json()
    feedback_type = data.get('feedback_type')
    message = data.get('message')

    feedback_path = os.path.join(output_dir, f'{feedback_type}_responses.json')
    feedback_data = load_json(feedback_path)
    feedback_data.append({'message': message})
    save_json(feedback_path, feedback_data)

    return jsonify({'status': 'success'})

@app.route('/api/feedback', methods=['GET'])
def get_feedback():
    feedback_type = request.args.get('type')
    if feedback_type not in ['like', 'dislike']:
        return jsonify({'error': 'Invalid feedback type.'}), 400

    feedback_path = os.path.join(output_dir, f'{feedback_type}_responses.json')
    feedback_data = load_json(feedback_path)
    return jsonify(feedback_data)

@app.route('/api/chatdetail', methods=['GET'])
def get_chat_details():
    chat_detail_path = os.path.join(output_dir, 'chatdetail.json')
    chat_details = load_json(chat_detail_path)
    return jsonify(chat_details)


def load_json(filepath):
    if os.path.exists(filepath):
        with open(filepath, 'r') as file:
            # Read lines from the file
            lines = file.readlines()

            # Join lines into a single string
            json_string = ''.join(lines)

            # Load JSON string
            try:
                return json.loads(json_string)
            except json.JSONDecodeError as e:
                print(f"Error loading JSON from {filepath}: {e}")
                return []

    return []

def save_json(filepath, data):
    with open(filepath, 'w') as file:
        json.dump(data, file, indent=4)

if __name__ == '__main__':
    app.run(debug=True)
