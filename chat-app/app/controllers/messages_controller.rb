class MessagesController < ApplicationController
  # before_action :set_message, only: %i[ show edit update destroy ]

  # GET /messages or /messages.json
  def index
    @messages = Message.all
    render json: @messages
  end

  # GET /messages/1 or /messages/1.json
  def show
  end

  # GET /messages/new
  def new
    @message = Message.new
  end

  # GET /messages/1/edit
  def edit
  end

  # POST /messages or /messages.json
  # def create
  #   @message = Message.new(message_params)

  #   respond_to do |format|
  #     if @message.save
  #       format.html { redirect_to message_url(@message), notice: "Message was successfully created." }
  #       format.json { render :show, status: :created, location: @message }
  #     else
  #       format.html { render :new, status: :unprocessable_entity }
  #       format.json { render json: @message.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  def create
    @message = Message.new(message_params)
<<<<<<< HEAD:chat-app/app/controllers/messages_controller.rb
=======
    respond_to do |format|
>>>>>>> 5b6fdeaf076dbd19e5b9315685e8ef21a25c11cf:chat_app2-main/chat-app/app/controllers/messages_controller.rb
    if @message.save
      render json: @message, status: :created
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end
end

  # PATCH/PUT /messages/1 or /messages/1.json
  def update
    respond_to do |format|
      if @message.update(message_params)
        format.html { redirect_to message_url(@message), notice: "Message was successfully updated." }
        format.json { render :show, status: :ok, location: @message }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @message.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /messages/1 or /messages/1.json
  def destroy
    @message.destroy!

    respond_to do |format|
      format.html { redirect_to messages_url, notice: "Message was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def message_params
      params.require(:message).permit(:body)
    end
end
