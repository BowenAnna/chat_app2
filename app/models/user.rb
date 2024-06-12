# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  name                   :string
#  password_digest        :string
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  username               :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#




# class User < ApplicationRecord
#   # Include default devise modules. Others available are:
#   # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
#   devise :database_authenticatable, :registerable,
#          :recoverable, :rememberable, :validatable
         
# end

# app/models/user.rb

# class User < ApplicationRecord
#   validates :name, presence: true
#   validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
#   validates :password, presence: true, length: { minimum: 6 }
# end

class User < ApplicationRecord
  has_secure_password

  validates :password, presence: true, length: { minimum: 8 }
end
