require 'pry'
require 'sinatra'
require './ShiftData'

before do
  response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
end

def sort_by_first_or_last_name(data, first_or_last)
  schedules_sorted_by_name = data

  sort_map = {
    first_name: 0,
    last_name: 1
  }

  schedules_sorted_by_name.sort! do |a, b|
    a[:name].split(' ')[sort_map[first_or_last]] <=> b[:name].split(' ')[sort_map[first_or_last]]
  end

  schedules_sorted_by_name
end

get '/' do
  'Hello world!'
end

get '/shifts' do
  content_type :json

  if params.has_key?(:sort_by)
    sorted_shifts = sort_by_first_or_last_name(ShiftData::SHIFTS, params['sort_by'].to_sym)
    sorted_shifts.to_json
  else
    print 'no param passed, just return'
    ShiftData::SHIFTS.to_json
  end
end
