# myapp.rb
require 'sinatra'
require 'sinatra/cross_origin'

shifts = [{:name=>"Alfred Brown", :shifts=>[{:day=>0, :start_at=>"12pm", :end_at=>"5pm", :duration=>5, :role=>"Server", :color=>"red"}, {:day=>1, :start_at=>"9am", :end_at=>"12pm", :duration=>3, :role=>"Host", :color=>"green"}, {:day=>3, :start_at=>"9am", :end_at=>"4pm", :duration=>7, :role=>"Server", :color=>"red"}, {:day=>5, :start_at=>"9am", :end_at=>"2pm", :duration=>5, :role=>"Host", :color=>"green"}]}, {:name=>"Tim Cannady", :shifts=>[{:day=>0, :start_at=>"11am", :end_at=>"6pm", :duration=>7, :role=>"Chef", :color=>"orange"}, {:day=>1, :start_at=>"9am", :end_at=>"3pm", :duration=>6, :role=>"Dishwasher", :color=>"purple"}, {:day=>2, :start_at=>"9am", :end_at=>"1pm", :duration=>4, :role=>"Chef", :color=>"orange"}, {:day=>5, :start_at=>"9pm", :end_at=>"4am", :duration=>7, :role=>"Dishwasher", :color=>"purple"}]}, {:name=>"Jeff Auston", :shifts=>[{:day=>1, :start_at=>"11am", :end_at=>"6pm", :duration=>7, :role=>"Chef", :color=>"orange"}, {:day=>2, :start_at=>"9am", :end_at=>"3pm", :duration=>6, :role=>"Dishwasher", :color=>"purple"}, {:day=>4, :start_at=>"9am", :end_at=>"1pm", :duration=>4, :role=>"Chef", :color=>"orange"}, {:day=>6, :start_at=>"9am", :end_at=>"4pm", :duration=>7, :role=>"Dishwasher", :color=>"purple"}]}]

# One of my attempts at solving CORS issues; you'll see many other attempts in the React app. I tried every thing I could possibly find/read on MDN, Stack Overflow.
configure do
  enable :cross_origin
end

def sort_by_first_or_last_name(data, first_or_last)
  schedules_sorted_by_name = data
  
  if first_or_last == "first_name" 
    schedules_sorted_by_name.sort! {|a, b| a[:name].split(' ')[0] <=> b[:name].split(' ')[0] }
  elsif first_or_last == "last_name"  
    schedules_sorted_by_name.sort! {|a, b| a[:name].split(' ')[1] <=> b[:name].split(' ')[1] }
  end
  
  return schedules_sorted_by_name
end

get '/' do
  'Hello world!'
end

# options '/shifts' do
#   # headers "Allow" => "GET, POST, OPTIONS"
#   headers "Allow" => "*"
#   # headers "Access-Control-Request-Method" => "GET"
#   headers "Access-Control-Allow-Origin" => "http://localhost:3000"
#   content_type :json
#   "options request!"
# end

get '/shifts' do
  # headers "Allow" => "GET, POST, OPTIONS"
  # headers "Access-Control-Allow-Origin" => "http://localhost:3000"
  # puts "request headers?: #{request[headers]}"
  
  
  "${params['sort_by']}"
  content_type :json

  if params["sort_by"] == "first_name"
    shifts_by_first = sort_by_first_or_last_name(shifts, params["sort_by"])
    shifts_by_first.to_json
  elsif params["sort_by"] == "last_name"
    shifts_by_last = sort_by_first_or_last_name(shifts, params["sort_by"])
    shifts_by_last.to_json
  else
    print "no param passed, just return"
    shifts.to_json
  end

end
