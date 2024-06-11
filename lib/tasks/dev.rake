# desc "Fill the database tables with some sample data"
# task({ :sample_data => :environment }) do
# end

desc "Fill the database tables with some sample data"
task({ :sample_data => :environment }) do
  p "Creating sample data"
  starting = Time.now

  if Rails.env.development?
    Message.destroy_all
    User.destroy_all
    p "Database wiped"
  end

  12.times do
    username = Faker::Name.first_name
    name = Faker::Name.name.capitalize
    u = User.create(
      username: username.downcase,
      email: "#{username}@example.com",
      password: "password",
      name: name
    )
  end

  p "Created #{User.all.count} users."

  p "There are now #{User.count} users."
end
