import React from "react";
import "./List.scss"


function List() {


    const mainList = [


        {
            id: 1, label: "Elements", subList: [


                {
                    k: 2, elementsItems: "Tabs & Accordions"

                },
                {
                    k: 3, elementsItems: "Typography"

                },
                {
                    k: 4, elementsItems: "Forms"

                },
                {
                    k: 5, elementsItems: "Buttons"

                },
                {
                    k: 6, elementsItems: "Grid"

                },
                {
                    k: 7, elementsItems: "Icons"

                }, {
                    k: 8, elementsItems: "Tables"

                },
                {
                    k: 9, elementsItems: "Progress bars"

                }

            ]
        },
        {
          id:2,label: "Features", subList: [


                {
                    k: 2, elementsItems: "Header Center, Footer Dark"

                },
                {
                    k: 3, elementsItems: "Header Minimal, Footer Dark"

                },
                {
                    k: 4, elementsItems: "Header Corporate Default"

                },
                {
                    k: 5, elementsItems: "Header Hamburger Menu"

                },
                {
                    k: 6, elementsItems: "Footer Center Dark"

                },
                {
                    k: 7, elementsItems: "Footer Widget Light"

                }, {
                    k: 8, elementsItems: "Footer Widget Dark"

                },


            ]

         },
        {
            id:3,label: "Extras", subList: [


                {
                    k: 2, elementsItems: "404"

                },
                {
                    k: 3, elementsItems: "Coming soon"

                },
                {
                    k: 4, elementsItems: "Login Page"

                },
                {
                    k: 5, elementsItems: "Maintenance  page "

                },
                {
                    k: 6, elementsItems: "Term of use"

                },



            ]

        },
        {
            id:4,label: "Property catalog", subList: [


                {
                    k: 2, elementsItems: "Property catalog grid"

                },
                {
                    k: 3, elementsItems: "Property catalog list"

                },
                {
                    k: 4, elementsItems: "Property catalog single"

                },


            ]

        },
        {
            id:5,label: "Pages", subList: [


                {
                    k: 2, pageItems: "Pages1" ,
                    subListItem1: [
                        {
                            sub:1, page:"Agency page"
                        },
                        {
                            sub:2, page:"Our team"
                        },
                        {
                            sub:3, page:"Agent personal page"
                        },
                        {
                            sub:4, page:"Contact us"
                        },
                        {
                            sub:5, page:"Pricing"
                        }
                    ]

                },
                {
                    k: 3, pageItems2: "Pages2" ,
                    subListItem2: [
                        {
                            sub:1, page:"Categories"
                        },
                        {
                            sub:2, page:"Client Page"
                        },
                        {
                            sub:3, page:"FAQ Page"
                        },
                        {
                            sub:4, page:"Services"
                        },
                        {
                            sub:5, page:"Services 2"
                        },
                        {
                            sub:6, page:"Submit Property"
                        },
                        {
                            sub:7, page:"Make an Appointment "
                        }
                    ]
                },
                {
                    k: 4, pageItems3: "Blog" ,
                    subListItem3: [
                        {
                            sub:1, page:"2 Columns blog"
                        },
                        {
                            sub:2, page:"2 Columns Blog Masonry"
                        },
                        {
                            sub:3, page:"3 Columns Blog"
                        },
                        {
                            sub:4, page:"3 Columns Blog Masonry"
                        },
                        {
                            sub:5, page:"Blog Left Sidebar"
                        },
                        {
                            sub:6, page:"Blog Right Sidebar"
                        },
                        {
                            sub:7, page:"Post Page "
                        },
                        {
                            sub:8, page:"Timeline"
                        }
                    ]
                },
                {
                    k: 5, pageItems4: "Layouts" ,
                    subListItem4: [
                        {
                            sub:1, page:"Header Center, Footer Dark"
                        },
                        {
                            sub:2, page:"Header Minimal, Footer Dark"
                        },
                        {
                            sub:3, page:"Header Corporate"
                        },
                        {
                            sub:4, page:"Header Corporate Default"
                        },
                        {
                            sub:5, page:"Header Hamburger Menu"
                        },
                        {
                            sub:6, page:"Footer Center Dark"
                        },
                        {
                            sub:7, page:"Footer Light "
                        },
                        {
                            sub:8, page:"Footer Widget Light"
                        },
                        {
                            sub:9, page:"Footer Widget Dark"
                        }
                    ]
                },


            ]

        },
        {
            id:6,label: "Blog", subList: [


                {
                    k: 2, elementsItems: "2 Columns Blog"

                },
                {
                    k: 3, elementsItems: "2 Columns Blog Masonry"

                },
                {
                    k: 4, elementsItems: "3 Columns Blog"

                },
                {
                    k: 5, elementsItems: " Blog Masonry"

                },
                {
                    k: 6, elementsItems: " Blog Left Sidebar"

                },
                {
                    k: 7, elementsItems: " Blog Right Sidebar"

                },
                {
                    k: 8, elementsItems: " Post Page"

                },
                {
                    k: 9, elementsItems: " Timeline"

                },


            ]

        },
        {
            id:7,label: "Gallery", subList: [


                {
                    k: 2, elementsItems: "Grid Padding Gallery"

                },
                {
                    k: 3, elementsItems: "Grid Without Padding Gallery"

                },
                {
                    k: 4, elementsItems: "Grid Masonry"

                },
                {
                    k: 5, elementsItems: "Grid Cobbles"

                },


            ]

        },


    ]



    return (
        <div className="ul-list">
            <div className="ul-list-items">
                <span>HOME</span>
            </div>

            {mainList.map((it) =>
                <div className="ul-list-items" key={it.id}>
                    <i className="bi bi-chevron-compact-down"> </i>
                    <div className="a">
                        <p className="zapara" > {it.label}</p>
                        <ul className="list-item" >
                            {it.subList.map((w) =>
                                <div className='w' key={w.k}>
                                    {w.elementsItems}

                                        <div>
                                            <div className="name-page">{w.pageItems}</div>
                                            {

                                                w.subListItem1 &&
                                                w.subListItem1.map((d)=>
                                                    <div className="kl" key={d.sub}>
                                                        <a href="/" className="pl">  {d.page}</a>
                                                    </div>
                                                )


                                            }
                                        </div>
                                        <div>
                                            <div className="name-page">{w.pageItems2}</div>
                                            {

                                                w.subListItem2 &&
                                                w.subListItem2.map((d)=>
                                                    <div key={d.sub}>
                                                        <a href="/" className="pl">  {d.page}</a>
                                                    </div>
                                                )


                                            }
                                        </div>
                                        <div>
                                            <div className="name-page">{w.pageItems3}</div>
                                            {

                                                w.subListItem3 &&
                                                w.subListItem3.map((d)=>
                                                    <div key={d.sub}>
                                                        <a href="/" className="pl">  {d.page}</a>
                                                    </div>
                                                )


                                            }
                                        </div>
                                        <div>
                                            <div className="name-page">{w.pageItems4}</div>
                                            {

                                                w.subListItem4 &&
                                                w.subListItem4.map((d)=>
                                                    <div key={d.sub}>
                                                        <a href="/" className="pl">  {d.page}</a>
                                                    </div>
                                                )


                                            }
                                        </div>
                                </div>

                            )}
                        </ul>
                    </div>




                </div>
            )}
        </div>
    )
}

export default List;