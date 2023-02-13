import React from "react";

interface LostFiguresProps {
    title: string;
    figure: Figure[]
}
const LostFigures: FC<LostFiguresProps> = ({ title: string, figures: Figure[]}) => {
    return (
        <div className="lost">
            <h3>{title}</h3>
            {figures.map(figure =>
                <div key={figure.id}>
            {figure.name}{figure.logo && <img width={20} height={20} src={figure.logo} />}
        </div>
    )}
    </div>
    );
};

export default LostFigures;