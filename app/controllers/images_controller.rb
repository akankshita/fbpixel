class ImagesController < ApplicationController
  def index
  end
  
  def new
   # render :text => session.inspect and return false
  
    @image = Image.new
   # render :text => @image.inspect and return false
  end
  
  def create
    
    @image = Image.new(params[:image])
    @image.save
    #render :action => 'show'
    redirect_to '/showimg'
  end
  
  def show
    @image = Image.last
  end
  def save_image
   # alert()
    @img_path = params["img_url"].split('/')
    
    @id= params[:id]
    @path ='public/'+@img_path[1]+'/'+@img_path[2]+'/'+@img_path[3]+'/'+@img_path[4]+'/final'+@id.to_s+'.png'
    @path_to_display ='http://'+"#{request.host_with_port}"+'/'+@img_path[1]+'/'+@img_path[2]+'/'+@img_path[3]+'/'+@img_path[4]+'/final'+@id.to_s+'.png'
    File.open("#{@path}","wb") do |file|
      file.write(Base64.decode64(params["src"]))
    end
    render :text => @path_to_display and return false
    
  end
  
  def download
  # render :text => params.inspect and return false
   # @image = Image.last
    @img_path = params[:imurl].split('/')
    
    @id= params[:time]
    path1 = "#{Rails.root}"+'/public/'+@img_path[1]+'/'+@img_path[2]+'/'+@img_path[3]+'/'+@img_path[4]+'/final'+@id.to_s+'.png'
    @path ='public/'+@img_path[1]+'/'+@img_path[2]+'/'+@img_path[3]+'/'+@img_path[4]+'/final'+@id.to_s+'.png'
  #  @path_to_display ="#{request.referer}"+'/'+@img_path[1]+'/'+@img_path[2]+'/'+@img_path[3]+'/'+@img_path[4]+'/final'+@id.to_s+'.png'
    File.open("#{@path}","wb") do |file|
      file.write(Base64.decode64(params["final-image"]))
      send_file(path1 ,:type => 'image/png', :x_sendfile => true,:stream => false)
    end
   #render :text => @path1 and return false
    #  @document = InfobannersDoc.find(:first,:conditions => ["id = ?",params[:id]])
    
    #send_file  @path1,:type => 'image/png', :x_sendfile => true, :stream => false
  end
end
