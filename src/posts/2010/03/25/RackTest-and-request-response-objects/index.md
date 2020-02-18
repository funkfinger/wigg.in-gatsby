---
layout: post
title: Rack::Test and request / response objects
date: "2010-03-26"
tags:
  - code
  - last_request
  - last_response
  - rack
  - request
  - response
  - ruby
  - sinatra
  - testunit
  - testing
  - test_helper-rb
---

Rack::Test uses <code>last_response</code> and <code>last_request</code> objects instead of Rack's typical <code>request</code> and <code>response</code> objects. This is probably normally fine, but when you are testing functionality that requires accessing the Rack's normal objects, they aren't there. I found (<a href='http://www.brynary.com/2009/3/5/rack-test-released-a-simple-testing-api-for-rack-based-frameworks-and-apps'>in the comments section of this post</a>) that you can fix this by overriding them in your test_helper.rb:

<pre lang='ruby' line='1'>
module Test::Unit
  class TestCase
    include Rack::Test::Methods
    ...
    
    def request(*args)
      args.empty? ? last_request : rack_test_session.request(*args)
    end

    ...
  end
end

</pre>
