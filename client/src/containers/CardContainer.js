import React, { useState } from 'react';
import moment from 'moment';

import Card from '../components/card/Card';

const CardContainer = ({ results }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [activeCard, setActiveCard] = useState(-1);

  const timeToBingeAll = (episodes, runtime) => {
    return moment.duration(episodes * runtime, 'm').humanize();
  };

  const handleIsHovering = (index) => {
    setIsHovering(true);
    setActiveCard(index);
  };

  const handleIsNotHovering = () => {
    setIsHovering(false);
    setActiveCard(-1);
  };

  const vidOpts = {
    playerVars: {
      autoplay: 1,
      color: 'white',
      controls: 0,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
      modestbranding: 0,
      rel: 0,
      origin: window.location.host
    }
  };

  return (
    <>
      {results?.data?.map(
        (result, index) =>
          result.backdrop_url && (
            <Card
              key={result.tmdb_id}
              onMouseLeave={handleIsNotHovering}
              onMouseOver={() => handleIsHovering(index)}
            >
              <Card.Border isHovering>
                {index === activeCard && isHovering && (
                  <Card.TrailerWrapper>
                    <Card.Trailer videoId={result.youtube_key} opts={vidOpts} />
                  </Card.TrailerWrapper>
                )}

                <Card.Image src={result.backdrop_url} alt={result.title} />
                {result.network_logo && (
                  <Card.LogoWrapper>
                    <Card.LogoImage
                      src={result.network_logo}
                      alt={'Network Logo'}
                    />
                  </Card.LogoWrapper>
                )}
                <Card.InfoWrapper>
                  <Card.Section>
                    <Card.Title>{result.title}</Card.Title>
                  </Card.Section>
                  <Card.Section>
                    <Card.Categories>{result.categories}</Card.Categories>
                  </Card.Section>
                  <Card.Section>
                    <Card.Overview>{result.overview}</Card.Overview>
                  </Card.Section>

                  <Card.Seperator>
                    <Card.Section>
                      <Card.Text>{result.release_date}</Card.Text>
                      {result.runtime && (
                        <Card.Text>{result.runtime} mins.</Card.Text>
                      )}
                    </Card.Section>
                  </Card.Seperator>
                  {result.tv && (
                    <>
                      <Card.Seperator>
                        <Card.Section>
                          <Card.Text>Seasons: {result.num_seasons}</Card.Text>

                          <Card.Text>Episodes: {result.num_episodes}</Card.Text>
                        </Card.Section>
                        <Card.Section>
                          <Card.Text>
                            Watch all in{' '}
                            {timeToBingeAll(
                              result.num_episodes,
                              result.runtime
                            )}
                          </Card.Text>
                        </Card.Section>
                      </Card.Seperator>
                    </>
                  )}
                </Card.InfoWrapper>
              </Card.Border>
            </Card>
          )
      )}
    </>
  );
};

export default CardContainer;
