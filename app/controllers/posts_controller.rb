class PostsController < ApplicationController
  before_action :authenticate_request, only: [:create]

  def index
    @posts = Post.all.order(created_at: :desc)
    render json: @posts, include: { user: { only: [:handle] } }
  end
  def show
    @post = Post.find(params[:id])
    render json: @posts, include: { user: { only: [:handle] } }

  end

  def create
    @posts = @current_user.posts.build(post_params)
    if @post.save
      render json: @posts, include: { user: { only: [:handle] } }, only: [:id, :title], status: :created, location: post_url(@posts, format: :json)
    else
      render json: @posts.errors, status: :unprocessable_entity
    end
  end

private
  def post_params
    params.require(:post).permit(:title, :body, :post_image)
  end
end
