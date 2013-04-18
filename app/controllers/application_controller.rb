class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :set_imgid
  def set_imgid
    session['imgid']  = ""
  end
end
