import React from 'react';
import styles from './ObjectionHandling.css'


export default class index extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      level1Topics: ['Price/Cost', 'Features (functionality)', 'Features (Capability)', 'Subscription Commitment', 'Software Complexity', 'Competitors'],
      level1Choice: [],
      level2Topics: ['Return on Investment - Cost to Operate', 'Return on Investment - Time to Operate', 'Level 2 Topic Box', 'Level 2 Topic Box'],
      level2Choice: [],
    }
  }

  render() {
    const {level1Topics, level1Choice, level2Topics, level2Choice} = this.state

    return (
      <div className={styles.objectionHandling}>
        <div className={styles.objectionHandlingContent}>
          <h2>Challenge and Navigate the Asteroid Field:</h2>

          <div className={styles.topics}>
            <div className={styles.level1}>
              <h3>Level 1 Topic</h3>

              <div className={styles.multipleChoice}>
                {level1Topics.map((e, index)=>{
                  let chosen = false
                  level1Choice.map((choice)=>{
                    if (choice===index) {
                      chosen = true
                    }
                  })

                  return (
                      <div className={chosen ? styles.choiceCard+' '+styles.choiceCardActive : styles.choiceCard}>
                        <span>{e}</span>
                      </div>
                    )
                })}
              </div>

            </div>

            <div className={styles.level2}>
              <h3>Level 2 Topic</h3>

              <div className={styles.multipleChoice}>
                {level2Topics.map((e, index)=>{
                  let chosen = false
                  level2Choice.map((choice)=>{
                    if (choice===index) {
                      chosen = true
                    }
                  })

                  return (
                      <div className={chosen ? styles.choiceCard+' '+styles.choiceCardActive+' '+styles.choiceCardLevel2 : styles.choiceCard+' '+styles.choiceCardLevel2}>
                        <span>{e}</span>
                      </div>
                    )
                })}
              </div>

            </div>

          </div>

          <div className={styles.handling}>
            <div className={styles.premise}>
              <div className={styles.handlingHeader}>
                <h2>Objection Handling Premise</h2>
              </div>
              <div className={styles.handlingBody}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam eveniet, vitae necessitatibus a reiciendis tempora possimus similique qui non autem placeat quod omnis iure.
              </div>
            </div>
            <div className={styles.guidance}>
              <div className={styles.handlingHeader}>
                <h2>Objection Handling Guidance</h2>
              </div>
              <div className={styles.handlingBody}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque praesentium aliquam blanditiis commodi perspiciatis dolore sapiente, quae unde ipsam ea nulla. Inventore, soluta, voluptates. Aperiam asperiores commodi labore aliquam corporis veritatis ipsum autem, quas vero dolorem necessitatibus tempora nemo voluptate, dolore aliquid repellendus.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
