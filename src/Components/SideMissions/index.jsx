import React from 'react';
import styles from './SideMissions.css'
import MainStore from '../../Stores/MainStore'



export default class index extends React.Component {
  constructor(props) {
    super(props);

    this.stepChange = this.stepChange.bind(this)
  }

  stepChange() {
    this.setState(this.state)
  }

  componentWillMount() {
    MainStore.on('stepChange', this.stepChange)
  }

  componentWillUnmount() {
    MainStore.removeListener('stepChange', this.stepChange)
  }

  chooseOption() {
    MainStore.state.step = 2
    MainStore.emit('stepChange')
  }

  optionClick(e){
    this.props.history.push('/sideMission/'+e)

  }

  render() {

    let step = MainStore.state.step

    let Link = this.props.Link

    return (
      <div>
        {window.location.href.toLowerCase().includes('side') ? (
          <div className={styles.breadcrumbs}>
            <div className={styles.breadcrumbsContent}>
              <h3>Side Mission Options:</h3>

              <div onClick={this.optionClick.bind(this, 'Cloud Services')} className={window.location.href.toLowerCase().includes('cloud') ? styles.breadcrumbsOption+' '+styles.breadcrumbsOptionActive : styles.breadcrumbsOption}>
                Cloud Services

                <div className='hoverBox'>
                  <div className='box'>
                  </div>
                  <div className='hoverBoxContent'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aliquid reiciendis unde animi voluptate.</p>
                  </div>
                </div>
              </div>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
              <div onClick={this.optionClick.bind(this, 'Pay Direct')} className={window.location.href.toLowerCase().includes('pay') ? styles.breadcrumbsOption+' '+styles.breadcrumbsOptionActive : styles.breadcrumbsOption}>
                PayDirect

                <div className='hoverBox'>
                  <div className='box'>
                  </div>
                  <div className='hoverBoxContent'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque doloribus eum molestiae doloremque id.</p>
                  </div>
                </div>
              </div>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
              <div onClick={this.optionClick.bind(this, 'Classroom Training')} className={window.location.href.toLowerCase().includes('classroom') ? styles.breadcrumbsOption+' '+styles.breadcrumbsOptionActive : styles.breadcrumbsOption}>
                Classroom Training

                <div className='hoverBox'>
                  <div className='box'>
                  </div>
                  <div className='hoverBoxContent'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dolor officia fugit itaque aut!</p>
                  </div>
                </div>
              </div>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
              <div onClick={this.optionClick.bind(this, 'Additional Files')} className={window.location.href.toLowerCase().includes('additional') ? styles.breadcrumbsOption+' '+styles.breadcrumbsOptionActive : styles.breadcrumbsOption}>
                Additional Files

                <div className='hoverBox'>
                  <div className='box'>
                  </div>
                  <div className='hoverBoxContent'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque reprehenderit natus saepe odit ab.</p>
                  </div>
                </div>
              </div>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
              <div onClick={this.optionClick.bind(this, 'Network License')} className={window.location.href.toLowerCase().includes('network') ? styles.breadcrumbsOption+' '+styles.breadcrumbsOptionActive : styles.breadcrumbsOption}>
                Network License

                <div className='hoverBox'>
                  <div className='box'>
                  </div>
                  <div className='hoverBoxContent'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita hic, veritatis at sequi impedit?</p>
                  </div>
                </div>
              </div>
              <div onClick={this.optionClick.bind(this, 'Kounta')} className={window.location.href.toLowerCase().includes('kounta') ? styles.breadcrumbsOption+' '+styles.breadcrumbsOptionActive : styles.breadcrumbsOption}>
                Kounta

                <div className='hoverBox'>
                  <div className='box'>
                  </div>
                  <div className='hoverBoxContent'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quibusdam possimus, eos molestiae repellat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ) : <div>
        </div>}
      </div>
    );
  }
}
