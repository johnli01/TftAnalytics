from backend import create_app

app = create_app()
print("Flask app created successfully.")

if __name__ == "__main__":
    app.run(debug=True)