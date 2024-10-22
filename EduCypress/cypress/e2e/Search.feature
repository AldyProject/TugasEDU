Feature:Data Search
        As a valid user
        I want to search for information on website http://zero.webappsecurity.com/index.html
        So that I can get the data I need quickly

Scenario: Searching for existing information
Given I am on the main page of website http://zero.webappsecurity.com/index.html
When I enter the keyword "pay bills" into the search field
And I press the "Search" button
Then I should see search results that are relevant to the keyword "Zero - Pay Bills"

Scenario: Searching for information that does not exist
Given I am on the main page of website http://zero.webappsecurity.com/index.html
When I enter the keyword "payment" into the search field
And I press the "Search" button
Then I should see the message "No results found"

Scenario: Searching for information without keywords
Given I am on the main page of website http://zero.webappsecurity.com/index.html
When I do not enter anything into the search field
And I press the "Search" button
Then I need to see all search results
