import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoPlaySlider = withAutoplay(AwesomeSlider);
const Slider = () => {
  return (
    <div className="mt-14">
      <AutoPlaySlider
        play={true}
        cancelOnInteraction={false}
        interval={1000}
        buttons={false}
        bullets={false}
        organivArrows={false}
        fillParent={false}
        infinite={false}
      >
        <div data-src="/candice.jpg" />
        <div data-src="/devon.jpg" />
        <div data-src="/mia.jpg" />
        <div data-src="/jasmine.jpg"></div>
        <div data-src="/justine.jpg"></div>
      </AutoPlaySlider>
    </div>
  );
};

export default Slider;
