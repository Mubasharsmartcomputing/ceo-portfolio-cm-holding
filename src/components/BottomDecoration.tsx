import bottomDecor from '../assets/images/aboutBanner.png';

const BottomDecoration = () => {
    return (
        <div className="relative h-[254px] z-[5] pointer-events-none w-full bg-[#101010]">
            <div
                className="absolute inset-x-0 top-0 h-[194px] bg-[length:100%_100%] bg-no-repeat opacity-40"
                style={{ backgroundImage: `url(${bottomDecor})` }}
            />
        </div>
    );
};

export default BottomDecoration;
