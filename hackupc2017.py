import os

from flask import Flask, request, redirect, url_for
from flask import render_template
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = '/uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/')
def hello_world():
	return 'Hello World!'


@app.route('/photo/',  methods=['GET', 'POST'])
def upload_photo():
	if request.method == 'GET':
		return render_template('file_upload_test.html')
	if request.method == 'POST':
		if 'photo' not in request.files:
			print('No photo in request')
			return redirect(request.url)
		file = request.files['photo']
		if file:
			filename = secure_filename(file.filename)
			file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
			return redirect(url_for('uploaded_file', filename=filename))


if __name__ == '__main__':
	app.run()
