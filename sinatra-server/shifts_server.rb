require 'pry'
require 'sinatra'

shifts = [
  {
    "name": 'Bruce Wayne',
    "shifts": [
      {
        "day": 0,
        "start_at": '12pm',
        "end_at": '5pm',
        "duration": 5,
        "role": 'Server',
        "color": 'red'
      },
      {
        "day": 1,
        "start_at": '9am',
        "end_at": '12pm',
        "duration": 3,
        "role": 'Host',
        "color": 'green'
      },
      {
        "day": 3,
        "start_at": '9am',
        "end_at": '4pm',
        "duration": 7,
        "role": 'Server',
        "color": 'red'
      },
      {
        "day": 5,
        "start_at": '9am',
        "end_at": '2pm',
        "duration": 5,
        "role": 'Host',
        "color": 'green'
      }
    ]
  },
  {
    "name": 'Steve Rogers',
    "shifts": [
      {
        "day": 0,
        "start_at": '11am',
        "end_at": '6pm',
        "duration": 7,
        "role": 'Chef',
        "color": 'orange'
      },
      {
        "day": 1,
        "start_at": '9am',
        "end_at": '3pm',
        "duration": 6,
        "role": 'Dishwasher',
        "color": 'purple'
      },
      {
        "day": 2,
        "start_at": '9am',
        "end_at": '1pm',
        "duration": 4,
        "role": 'Chef',
        "color": 'orange'
      },
      {
        "day": 5,
        "start_at": '9pm',
        "end_at": '4am',
        "duration": 7,
        "role": 'Dishwasher',
        "color": 'purple'
      }
    ]
  },
  {
    "name": 'Clark Kent',
    "shifts": [
      {
        "day": 1,
        "start_at": '11am',
        "end_at": '6pm',
        "duration": 7,
        "role": 'Chef',
        "color": 'orange'
      },
      {
        "day": 2,
        "start_at": '9am',
        "end_at": '3pm',
        "duration": 6,
        "role": 'Dishwasher',
        "color": 'purple'
      },
      {
        "day": 4,
        "start_at": '9am',
        "end_at": '1pm',
        "duration": 4,
        "role": 'Chef',
        "color": 'orange'
      },
      {
        "day": 6,
        "start_at": '9am',
        "end_at": '4pm',
        "duration": 7,
        "role": 'Dishwasher',
        "color": 'purple'
      }
    ]
  }
]

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
    sorted_shifts = sort_by_first_or_last_name(shifts, params['sort_by'].to_sym)
    sorted_shifts.to_json
  else
    print 'no param passed, just return'
    shifts.to_json
  end
end
