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

  if first_or_last == 'first_name'
    schedules_sorted_by_name.sort! { |a, b| a[:name].split(' ')[0] <=> b[:name].split(' ')[0] }
  elsif first_or_last == 'last_name'
    schedules_sorted_by_name.sort! { |a, b| a[:name].split(' ')[1] <=> b[:name].split(' ')[1] }
  end

  schedules_sorted_by_name
end

get '/' do
  'Hello world!'
end

get '/shifts' do
  content_type :json

  if params['sort_by'] == 'first_name'
    shifts_by_first = sort_by_first_or_last_name(shifts, params['sort_by'])
    shifts_by_first.to_json
  elsif params['sort_by'] == 'last_name'
    shifts_by_last = sort_by_first_or_last_name(shifts, params['sort_by'])
    shifts_by_last.to_json
  else
    print 'no param passed, just return'
    shifts.to_json
  end
end
