class SpewsController < ApplicationController
  before_action :authenticate_request, only: [:create]

  def index
    @spews = Spew.all.order(created_at: :desc)
    render json: @spews, include: { user: { only: [:handle] } }, only: [:id, :content]
  end

  def create
    @spew = @current_user.spews.build(spew_params)
    if @spew.save
      render json: @spew, include: { user: { only: [:handle] } }, only: [:id, :content], status: :created, location: spew_url(@spew, format: :json)
    else
      render json: @spew.errors, status: :unprocessable_entity
    end
  end


private
  def spew_params
    params.require(:spew).permit(:content)
  end
end
