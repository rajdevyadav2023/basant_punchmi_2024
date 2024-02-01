import banner from '../assets/home.jpg';
import srswti from '../assets/srswti.jpeg'
const Home = () => {
  return (
    <div className="home">
      {/* <h1 className='f-lilita'>Happy Basant Panchmi 2024</h1> */}
      {/* <h1 className='f-righteous'>Happy Basant Panchmi 2024</h1> */}
      
      <img src={banner} alt="" className='banner' />
      <h1 className='f-outfit'>Happy Basant Panchmi 2024</h1>

      <p>Basant Panchami or Vasant Panchami is also known as Saraswati Puja and marks the arrival of the spring festival. The festival is celebrated at the end of the Magha month which is generally the end of January and the start of February. This is because according to Hindu mythology, it was on this day that Lord Brahma created the universe.</p>

      <p>The festival is known as Saraswati Puja In the eastern part of India, specifically in Bihar and West Bengal. But in Northern India, especially in Punjab, people celebrate the festival by flying kites, while in Rajasthan, it is traditional to wear jasmine garlands on this auspicious day. Basant Panchami also signals the beginning of preparations for the festival of colours - Holi, which takes place after forty days.</p>

      <div className="message">
        <img src={srswti} alt="message" className='msg-img'/>
        <h1 className='msg-txt'>May you find success in dispelling the shadows of ignorance and welcoming the light of wisdom into your life with the blessings of Goddess Saraswati. I extend my warm greetings and heartfelt wishes on the occasion of Basant Panchami.</h1>
      </div>
    </div>
  )
}

export default Home