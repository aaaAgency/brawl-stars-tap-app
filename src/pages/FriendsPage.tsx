import Button from "../components/ui/Button";

import { formatNumber } from "../utils/formatNumbers";
import { IFriendsArray, friendsArray } from "../utils/friendsArray";

const FriendsPage = () => {
    return (
        <section className="base-page-style">
            <img
                className="fixed -z-10 h-full w-[390px] object-center object-cover"
                src={"/static/img/backgrounds/friend-bg.png"}
                alt="bg"
            />

            <img src={"/static/img/page-image/friends-page-image.png"} alt="friend-bg" className="w-[226.72px] h-[166.98px] flex mx-auto" />
            <h2 className="font-medium text-4xl text-center mb-10">Ваши друзья</h2>

            <div className="flex flex-col gap-[25px] mx-4">
                <span className="text-left font-medium text-[22px]">Всего друзей: {formatNumber(friendsArray.length)}</span>

                <div className="flex flex-col gap-[10px] items-center justify-center">
                    <div className="shadow-grayButton rounded-xl border border-black block-gradient p-5 w-full min-h-[270px] flex flex-col gap-[10px]">
                        {friendsArray.map((el: IFriendsArray) => (
                            <div key={el.id} className="flex items-center justify-between">
                                <div className="flex items-center gap-[15px]">
                                    <img src={el.avatar} alt="avatar" className="w-[50px] h-[50px]" />
                                    <span className="bebebe max-w-[169px] font-medium text-base">{el.nickname}</span>
                                </div>
                                <span className="text-green font-medium text-base">+ {formatNumber(el.bill)}</span>
                            </div>
                        ))} 
                        {friendsArray.length === 0 && (
                            <span className="flex items-center justify-center m-auto font-medium text-base text-light-grey">
                                У вас пока нет друзей
                            </span>
                        )}
                    </div>

                    <Button className="block-gradient font-medium text-[16px]">Найти друга</Button>
                    <Button className="orange-gradient font-medium text-[16px]">Пригласить друга</Button>
                </div>
            </div>
        </section>
    )
}

export default FriendsPage