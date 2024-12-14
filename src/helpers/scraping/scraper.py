from bs4 import BeautifulSoup
import requests
from urllib.parse import urlparse, unquote
import re
import json


def scraper(url):
    response = requests.get(url)
    html_content = response.text

    soup = BeautifulSoup(html_content, 'html.parser')

    # Extract the name from the URL
    path = urlparse(url).path
    name = unquote(path.split("/")[-1]).replace("-",
                                                " ").replace(".html", "").strip()

    pattern = re.compile(fr'.*{re.escape(name)}.*', re.IGNORECASE)

    h1_tags = soup.find_all('h1')

    filtered_tags = [
        tag for tag in h1_tags
        if tag.get('title') and pattern.search(tag['title'])
    ]
    if filtered_tags:
        h1_tag = filtered_tags[0]
        title = h1_tag.get('title', 'Title not found')
        text_content = h1_tag.get_text(strip=True)
        result = {
            'title': title,
            'text_content': text_content
        }
    else:
        result = {
            'error': 'No matching H1 tag found'
        }

    # Extract the layout-overview div and its children
    layout_overview_div = soup.find('div', class_='layout-overview')

    if layout_overview_div:
        # Convert the div and its children to a dictionary format
        layout_overview = {
            'layout_overview_html': str(layout_overview_div)
        }
        result['layout_overview'] = layout_overview
    else:
        result['layout_overview'] = {'error': 'No layout-overview div found'}

    # Ensure the result is printed as JSON
    print(json.dumps(result))


#
if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        scraper(sys.argv[1])
    else:
        print(json.dumps({'error': 'No URL provided'}))
