import React, { useState, useEffect } from 'react';
import Reactron from 'reactron';

const Example = () => {
  const placeholderParagraph = () => {
    return (
      <>
        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath
      </>
    )
  }

  return (
    <>
      <div className="section">
        <div className="notification">
          <p>
            Buried deep in the snow, he hoped his <strong>batteries</strong> were fresh in his <mark>avalanche</mark> beacon.
          </p>
        </div><br/>

        <div className="notification info">
          <p>
            There was no telling what <em>thoughts</em> would come from the <mark>machine</mark>.
          </p>
        </div><br/>

        <div className="notification success">
          <p>
            He is good at eating <mark>pickles</mark> and telling women about his emotional problems.
          </p>
        </div><br/>

        <div className="notification error">
          <p>
            Your girlfriend bought your <mark>favorite cookie crisp cereal</mark> but forgot to get milk.
          </p>
        </div><br/>
      </div>

      <div className="section">
        <div className="flex-container">
          <select>
            <option>Option 1</option>
          </select>
          <input type="text" value="640" />
          <input type="text" value="480" />
          <button className="blue">Create</button>
          <button>Clear</button>
        </div>
      </div>

      <div className="section">
        <div className="container alt">
          <select>
            <option>Option 1</option>
          </select>
          <input type="text" value="640" />
          <input type="text" value="480" />
          <button className="blue">Create</button>
          <button>Clear</button>
        </div>
      </div>

      <div className="section">
        <h3>Continuous</h3>
        <p>
          { placeholderParagraph() }
        </p>
      </div>

      <div className="section alt">
        <h3>Reluctance</h3>
        <p>
          { placeholderParagraph() }
        </p>
      </div>

      <div className="section">
        <h3>Werther</h3>
        <div className="container alt no-margin">
          <p>
            { placeholderParagraph() }
          </p>
        </div>
      </div>
    </>
  )
}

export default Example;
