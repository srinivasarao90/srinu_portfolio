from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def hello():
    return jsonify(message="Hello from Flask on Netlify!")

# The following allows Netlify to deploy this function
def handler(event, context):
    from serverless_wsgi import handle_request
    return handle_request(app, event, context)
