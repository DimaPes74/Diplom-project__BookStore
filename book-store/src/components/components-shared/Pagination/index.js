import { SvgSelector } from "../icons/SvgSelectors"



function Pagination ({prev, page1, page2, page3, next}) {
    return (
        <div className="pagination">
            <ul className="pagination__wrapper">
                <li><button><SvgSelector id="ArrowUpLeft"/>Prev</button></li>
                <li><button>1</button></li>
                <li><button>2</button></li>
                <li><button>3</button></li>
                <li><button>Next<SvgSelector id="ArrowUpRight"/></button></li>
            </ul>
        </div>
    )
}

export default Pagination