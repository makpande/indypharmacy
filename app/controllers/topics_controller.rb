class TopicsController < ApplicationController
  def index
    @topics = Topic.all.order(created_at: :desc)
    render json: @topics
  end
  def show
    @topic = Topic.find(params[:id])
    render json: @topic
  end
end
