from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/weather', methods=['POST'])
def weather():
    city = request.form['city']
    # Simulate weather data (replace with actual API call in production)
    weather_data = {
        'city': city,
        'temperature': 25,
        'description': 'Sunny',
        'icon': '01d'  # You can use weather icons to represent different weather conditions
    }
    return render_template('weather.html', weather=weather_data)

if __name__ == '__main__':
    app.run(debug=True)
