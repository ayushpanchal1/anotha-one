from flask import Flask, render_template

app = Flask(__name__)

# Hardcoded blog posts
blog_posts = [
    {
        'id': 1,
        'title': 'First Post',
        'content': 'This is the content of the first post.'
    },
    {
        'id': 2,
        'title': 'Second Post',
        'content': 'This is the content of the second post.'
    }
]

@app.route('/')
def home():
    return render_template('index.html', posts=blog_posts)

@app.route('/post/<int:post_id>')
def post(post_id):
    post = next((post for post in blog_posts if post['id'] == post_id), None)
    if post:
        return render_template('post.html', post=post)
    else:
        return 'Post not found', 404

if __name__ == '__main__':
    app.run(debug=True)
