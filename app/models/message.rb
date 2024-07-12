# == Schema Information
#
# Table name: messages
#
#  id           :integer          not null, primary key
#  body         :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  recipient_id :integer
#  sender_id    :integer
#
# Indexes
#
#  index_messages_on_recipient_id  (recipient_id)
#  index_messages_on_sender_id     (sender_id)
#
# Foreign Keys
#
#  recipient_id  (recipient_id => users.id)
#  sender_id     (sender_id => users.id)
#
class Message < ApplicationRecord
  # belongs_to :recipient, class_name: "User"
  # belongs_to :sender, class_name: "User"

  after_create_commit { broadcast_message }

  private

  def broadcast_message
    ActionCable.server.broadcast("MessagesChannel", {
      id: id,
      body: body,
      # sender_id: sender_id,
      # recipient_id: recipient_id
    })
  end
end
