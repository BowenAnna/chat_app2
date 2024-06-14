Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # origins "*"
    origins 'http://localhost:5173' # Update this to match your React app’s URL
    resource "*",
    headers: :any,
    methods: [:get, :post, :put, :patch, :delete, :options, :head],
    credentials: true 
  end
end
