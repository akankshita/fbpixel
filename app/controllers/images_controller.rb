class ImagesController < ApplicationController
  def index
  end
  
  def new
    @image = Image.new
  end
  
  def create
    @image = Image.new(params[:image])
    @image.save
    session['imgid'] = @image.id
    redirect_to(@image)
  end
  
  def show
   @image = Image.find(params['id'])
  end
  def save_image
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
    @img_path = params[:imurl].split('/')
    
    @id= params[:time]
    path1 = "#{Rails.root}"+'/public/'+@img_path[1]+'/'+@img_path[2]+'/'+@img_path[3]+'/'+@img_path[4]+'/final'+@id.to_s+'.png'
    @path ='public/'+@img_path[1]+'/'+@img_path[2]+'/'+@img_path[3]+'/'+@img_path[4]+'/final'+@id.to_s+'.png'
    File.open("#{@path}","wb") do |file|
      file.write(Base64.decode64(params["final-image"]))
      send_file(path1 ,:type => 'image/png', :x_sendfile => true,:stream => false)
    end
  end
end
