from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('feedback.html')

@app.route('/submit', methods=['POST'])
def submit():
    feedback = request.form['feedback']
    return redirect(url_for('show_feedback', feedback=feedback))

@app.route('/show_feedback')
def show_feedback():
    feedback = request.args.get('feedback')
    return render_template('index.html', feedback=feedback)

if __name__ == '__main__':
    app.run(debug=True)
