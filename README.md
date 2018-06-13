# Florida_Energy
Florida Energy site redesign proposal - http://floridaenergy.ufl.edu/


## Purpose of Redesign

The purpose of the site redesign is to create an compelling and inviting user experience. This will make your site visitors want to spend more time on the site to learn about FESC and the your resources . The redesign will focus on creating a modern responsive and mobile-friend site. In our increasingly mobile first world, it's important that pages load fast or risk losing potential consumers before the contents of the pages even load. This can be done by reorganizing and reprioritizing content. Site images and content should be optimized based on the devices used to view the site. In addition, the site will be designed for accessibility. Designing an accessible site means considering diverse range of hardware, language, hearing, sight, and cognitive ability. 

## State of the Current Site 
* Non-responsive page design with set width
* Slow loading pages
* Confusing navigation
* Small text
* Ineffective Site Map
* Outdate social media presence and Non-existent LinkedIn profile
* Disjointed Contact us pages with separate map instructions
* Outdated copyright
	
## Accessibility Audit 
https://achecker.ca
* Add alt tags to images
* Adjust color contrast on image
* Adjust font size for smaller browsers
* Small non-responsive text

## Mobile Friendliness
https://search.google.com/test/mobile-friendly
* Viewport not set
* Clickable elements to close together
* Text to small too read
* Content wider than screen

## Performance
* 4.29s on cable connections Chrome on various windows, iOS, and Android platforms
* 14s on a 3G mobile device
* 7.5s for 4G mobile devices
* Images and Javascript take up 80% of the bandwidth
* Bandwidth is relative high, using 1.1mb at an average cost of $.08
	
## User Research 
* Professors and Students within the 12 Florida Energy System Consortium (FESC) Universities
* The public to learn about energy systems and outreach programs
* Site will need to function on mobile devices based on the sites primary demographics. User are more likely to have access and research opportunities using their mobile devices or start on mobile devices before investing more time on the site and transitioning to a desktop.

## Recommendations
* Simplify the page header including the logo and sliding images, and make it responsive
* Update top navigation to include better color contrast, a collapsible navigation on smaller screens, integrated search box, and sub-menus that will replace the left navigation
* Redesign page layouts to create modular elements that can scale to different browser sizes and nicely collapse on mobile devices
* Adjust text size
* Update footer to simplify affiliated universities to text for faster loading. Integrate social media links and actual contact and location information. Update copyright information.
* Add popup newsletter option that's more front and center
* Update site navigation in modular chunks instead of a long hard to decipher list
Create news feed elements to display new outreach, educational, and research proposal opportunities. Ensuring that posts expire after they are no longer relevant. 

## Google Charts
https://google-developers.appspot.com/chart/
* Located on the Education page (https://adran5.github.io/Florida_Energy/education.html)
* The line chart was picked to show the trend of the available matching data that showed Florida's total energy consumption vs. renewable energy production. This gives a clear trend line of how far renewables have come and how far they still have to go.
* The donut chart was choosen to depict the percentage of energy consumption vs. renewable energy production for a specific year. This should help illustrate the impact that renewables are having in Florida. It might make sense to add a year picker so that specific years percentages can be displayed. 

## API Chart Data
https://www.eia.gov/
* The total Florida renewable chart data is retrieved using this API: http://api.eia.gov/series/?api_key=YOUR_API_KEY_HERE&series_id=SEDS.REPRB.FL.A
* The total Florida energy data is retrieved using this API: http://api.eia.gov/series/?api_key=YOUR_API_KEY_HERE&series_id=SEDS.TETCB.FL.A
* A key can be requested using this link: https://www.eia.gov/opendata/register.php
* The js is located on within googlecharts.js
