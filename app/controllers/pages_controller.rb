class PagesController < ApplicationController
  def feed
    @posts = Post.includes(:user)
  end

  def search
  end

  def query
    @search_param = params[:search].to_s.downcase
    @search_string = '%' + @search_param.gsub(" ","%") + '%'
    @posts = Post.where('LOWER(title) like ?', @search_string)
    render layout: false
  end
end
