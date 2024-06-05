# class Message < ApplicationRecord
#   after_create_commit { broadcast_message }

#   private

#   def broadcast_message
#     ActionCable.server.broadcast("MessagesChannel", {
#       id:,
#       body:
#     })
#   end
# end

class Message < ApplicationRecord
  after_create_commit { broadcast_message }

  private

  def broadcast_message
    ActionCable.server.broadcast("MessagesChannel", {
<<<<<<< HEAD:chat-app/app/models/message.rb
      id:,
      body:
=======
      id: self.id,
      body: self.body
>>>>>>> 5b6fdeaf076dbd19e5b9315685e8ef21a25c11cf:chat_app2-main/chat-app/app/models/message.rb
    })
  end
end
