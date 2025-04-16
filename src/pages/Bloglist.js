import React, { useState } from 'react'
import "./bloglist.css"
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';

const tags = ["Technology", "Health", "Design", "Marketing", "Startup"];

const blogData = [
    {
        id: 1,
        tag: 'Design',
        image: 'https://cdn.prod.website-files.com/6380a89e490c21839497cd83/67f8fd8b59e9c64401d067e6_preview.png',
        author: 'John Doe',
        date: '05 April 2025',
        title: 'Design Thinking: Innovate Like a Pro',
        excerpt: 'Discover how design thinking fuels innovation and creativity...',
    },
    {
        id: 2,
        tag: 'Technology',
        image: 'https://cdn.prod.website-files.com/6380a89e490c21839497cd83/67f3ee9ef7c3f9505b0299ad_preview.png',
        author: 'Jane Smith',
        date: '12 April 2025',
        title: 'The Future of AI: What to Expect',
        excerpt: 'Artificial intelligence is rapidly evolving. Learn what’s next...',
    },
    {
        id: 3,
        tag: 'UI/UX',
        image: 'https://cdn.prod.website-files.com/6380a89e490c21839497cd83/67f3ee9ef7c3f9505b0299ad_preview.png',
        author: 'Alex Brown',
        date: '18 April 2025',
        title: 'UI/UX Best Practices for 2025',
        excerpt: 'Make your interfaces intuitive and user-friendly...',
    },
    {
        id: 4,
        tag: 'Design',
        image: 'https://cdn.prod.website-files.com/6380a89e490c21839497cd83/67f3ee9ef7c3f9505b0299ad_preview.png',
        author: 'Sara Lee',
        date: '22 April 2025',
        title: 'Color Theory in Design',
        excerpt: 'Learn how to use colors effectively in design...',
    },
    {
        id: 5,
        tag: 'Technology',
        image: 'https://cdn.prod.website-files.com/6380a89e490c21839497cd83/67f3ee9ef7c3f9505b0299ad_preview.png',
        author: 'Chris Evans',
        date: '28 April 2025',
        title: 'Quantum Computing Basics',
        excerpt: 'Get to know the next-gen technology behind quantum computing...',
    },
    {
        id: 6,
        tag: 'UI/UX',
        image: 'https://cdn.prod.website-files.com/6380a89e490c21839497cd83/67f3ee9ef7c3f9505b0299ad_preview.png',
        author: 'Emily Clark',
        date: '02 May 2025',
        title: 'Microinteractions That Matter',
        excerpt: 'Delight your users with subtle yet powerful UI touches...',
    },
    // Add more blog objects as needed
];


const Bloglist = () => {
    const [selectedTag, setSelectedTag] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 3;

    const tags = ['All', ...new Set(blogData.map(blog => blog.tag))];

    const filteredBlogs = selectedTag === 'All'
        ? blogData
        : blogData.filter(blog => blog.tag === selectedTag);

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    return (
        <div>
            <Header />
            <div class="page-wrapper mt-header visible blog-page__wrapper " bis_skin_checked="1">
                <div class="section" bis_skin_checked="1">
                    <div class="container-old w-container" bis_skin_checked="1">
                        <div bis_skin_checked="1">
                            <div data-w-id="058f6e08-5b93-5679-3d02-685ddbf4fdbc" class="breadcrumbs-container" bis_skin_checked="1"><a href="/" class="breadcrumbs-item">Home</a><img src="https://cdn.prod.website-files.com/637dd8d62ccaf602c8ad331c/644a81c0d77539b4709e3de9_Vector.svg" loading="lazy" alt="" class="breadcrumbs-divider" />
                                <div class="breadcrumbs-item" bis_skin_checked="1">Blog</div>
                            </div>
                        </div>
                        <div class="section first-screen__black tablet-mt0" bis_skin_checked="1">
                            <h1 data-w-id="b28e43ce-d9cb-d46d-37f4-2007b0f04447" class="black-section__heading" >Digital marketing news with professional opinion. Worth reading</h1>
                            <div data-w-id="b28e43ce-d9cb-d46d-37f4-2007b0f0444b" class="black-section__subtitle" bis_skin_checked="1">We don't rewrite articles related to digital marketing. We analyze the pain points of our clients and try to cover topics that can help them improve their businesses. With real case studies and comments from our experts.</div>
                        </div>
                    </div>
                </div>
                <section id="cases" class="section">
                    <div class="container-old w-container" bis_skin_checked="1">
                        <div data-w-id="2bbaba4f-c851-fcdb-873e-034eacdd2fda" class="mt40 w-dyn-list" bis_skin_checked="1">
                            <div fs-cmsnest-element="list" role="list" class="blog-start__list w-dyn-items" bis_skin_checked="1">
                                <div role="listitem" class="w-dyn-item" bis_skin_checked="1">
                                    <div class="blog-start__item" bis_skin_checked="1">
                                        <div class="blog-start__img-wrapper" bis_skin_checked="1">
                                            <img src="https://cdn.prod.website-files.com/6380a89e490c21839497cd83/67d152110ecb628a58f0be50_sensory%20marketing%20large.png" loading="eager" alt="sensory marketing" sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 94vw, (max-width: 1919px) 68vw, 770px" srcset="https://cdn.prod.website-files.com/6380a89e490c21839497cd83/67d152110ecb628a58f0be50_sensory%20marketing%20large-p-500.png 500w, https://cdn.prod.website-files.com/6380a89e490c21839497cd83/67d152110ecb628a58f0be50_sensory%20marketing%20large-p-800.png 800w, https://cdn.prod.website-files.com/6380a89e490c21839497cd83/67d152110ecb628a58f0be50_sensory%20marketing%20large-p-1080.png 1080w, https://cdn.prod.website-files.com/6380a89e490c21839497cd83/67d152110ecb628a58f0be50_sensory%20marketing%20large.png 1360w" class="br24" />
                                        </div>
                                        <div class="blog-start__text-wrapper" bis_skin_checked="1">
                                            <div bis_skin_checked="1"></div>
                                            <div bis_skin_checked="1">
                                                <a href="/blog/sensory-marketing" class="name-service__our-services fs24">Sensory Marketing: How to Attract Customers Through Sight, Sound, Touch, and More</a>
                                            </div><p class="p-medium gray80 limit-p">Sensory marketing is the trend of 2025. It’s about conveying an idea or product by amplifying associations. </p>
                                            <div fs-cmsnest-collection="blog-tag" class="blog-subwrapper__item left" bis_skin_checked="1">
                                                <div class="sub-text__blog non-caps" bis_skin_checked="1">March 11, 2025</div>
                                                <div class="sub-dots__blog" bis_skin_checked="1"></div>
                                                <div class="sub-text__blog non-caps" bis_skin_checked="1">8 mins</div>
                                            </div>
                                            <div class="display-inline-block pointer-events-none" bis_skin_checked="1">
                                                <div data-w-id="8b279639-cf51-a38c-9146-d56dc77692ee" class="learn-more__case-w mt24" bis_skin_checked="1">
                                                    <div data-w-id="8b279639-cf51-a38c-9146-d56dc77692ef" class="learn-more__text__wrapper" bis_skin_checked="1">
                                                        <div data-w-id="8b279639-cf51-a38c-9146-d56dc77692f0" class="learn-more__case black-tablet" bis_skin_checked="1">Learn more</div>
                                                        <div class="learn-more__icon-wrapper" bis_skin_checked="1"><img src="https://cdn.prod.website-files.com/637dd8d62ccaf602c8ad331c/6388ad6811d3ac2a43bb9193_Vector.svg" loading="lazy" alt="" class="img-arrow red" />
                                                            <img src="https://cdn.prod.website-files.com/637dd8d62ccaf602c8ad331c/63864fa9d1da816d67d06bed_Arrow.svg" loading="lazy" aria-hidden="true" alt="" class="img-arrow tablet-show" /></div>
                                                    </div>
                                                    <div data-w-id="8b279639-cf51-a38c-9146-d56dc77692f5" class="learn-more__border" bis_skin_checked="1"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /><br /><br />
                        <div class="w-dyn-list" bis_skin_checked="1" >
                            <div fs-cmsnest-collection="tag" role="list" class="blog-tags__list w-dyn-items" bis_skin_checked="1">

                                {tags.map((tag) => (
                                    <button
                                        key={tag}
                                        className={`filter-btn blog-tags__item w-dyn-item mx-2  border-none ${selectedTag === tag ? 'background text-light' : 'bg-light border-radius text-dark'}`}
                                        onClick={() => handleTagClick(tag)}
                                    >

                                        <div class="blog-tag__text" bis_skin_checked="1">    {tag}</div>
                                    </button>
                                ))}

                            </div>
                        </div>
                        <div class="blog-filter__wrapper" bis_skin_checked="1"><div class="blog-collection__list-wrapper w-dyn-list" bis_skin_checked="1"><div fs-cmsload-mode="pagination" fs-cmsfilter-element="list" fs-cmsload-element="list" fs-cmsfilter-showquery="true" role="list" class="blog-collection__list w-dyn-items" bis_skin_checked="1">


                            {currentBlogs.map((blog) => (
                                <>


                                    <div data-w-id="50168587-9c54-bb32-7e09-46968119cf5b" role="listitem" class="blog-collection__item w-dyn-item" key={blog.id} bis_skin_checked="1">
                                        <div class="blog-collection__cms-wrapper" bis_skin_checked="1">
                                            <div class="blog-collection__link-wrapper img" bis_skin_checked="1">
                                                <img src={blog.image} loading="lazy" alt="How to use FOMO in Marketing" class="img-absolute br24" />
                                            </div>
                                            <div class="w-dyn-list" bis_skin_checked="1">
                                                <div role="list" class="blog-tags__list w-dyn-items" bis_skin_checked="1">
                                                    <div role="listitem" class="blog-tags__item w-dyn-item" bis_skin_checked="1">
                                                        <div fs-cmsfilter-field="blog-tag" class="blog-tag__text" bis_skin_checked="1">{blog.tag}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="blog-collection__link-wrapper text-wrapper" bis_skin_checked="1">
                                                <div class="blog-title__preview" bis_skin_checked="1">
                                                    <a href="/blog/fomo-in-marketing" class="blog-title__link text-dark">{blog.title}</a>
                                                </div>
                                                <p class="p-medium gray80 limit-p">{blog.excerpt}</p>
                                                <div class="blog-subwrapper__item left" bis_skin_checked="1">
                                                    <div class="sub-text__blog non-caps" bis_skin_checked="1">{blog.date}</div>
                                                    <div class="sub-dots__blog" bis_skin_checked="1"></div>
                                                    <div class="sub-text__blog non-caps" bis_skin_checked="1">10 mins</div></div>
                                            </div>
                                        </div>
                                        <div class="hidden w-embed w-script" bis_skin_checked="1">

                                        </div>
                                    </div>

                                </>
                            ))}


                        </div>
                            <div fs-cmsfilter-element="empty" class="empty__wrapper" bis_skin_checked="1" style={{ display: "none" }}>
                                <div class="title-empty" bis_skin_checked="1">It seems we are just working on such blogs.</div>
                                <div class="descr-empty" bis_skin_checked="1">Please, try other filters.</div>
                            </div>
                            <div role="navigation" aria-label="List" class="w-pagination-wrapper pagination__wrapper" bis_skin_checked="1">
                                <a href="?8119cf59_page=0" aria-label="Previous Page" class="w-pagination-previous pagination__arrow" style={{ display: "none" }}><svg class="w-pagination-previous-icon" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" transform="translate(0, 1)"><path fill="none" stroke="currentColor" fill-rule="evenodd" d="M8 10L4 6l4-4"></path></svg><div class="w-inline-block" bis_skin_checked="1">Previous</div></a>
                                <div class="pagination__number-wrapper" bis_skin_checked="1">
                                    <div className="d-flex justify-content-center mt-4">
                                        {[...Array(totalPages)].map((_, index) => (
                                            <button
                                                key={index}
                                                className={`btn pagination__number  mx-1 ${currentPage === index + 1 ? 'btn-danger text-light' : 'btn-outline-secondary'}`}
                                                onClick={() => handlePageChange(index + 1)}
                                            >
                                                {index + 1}
                                            </button>
                                        ))}
                                    </div>
                                    {/* <a fs-cmsload-element="page-button" href="/blog" class="pagination__number w--current" aria-current="page">1</a>
                                            <a fs-cmsload-element="page-button" href="?8119cf59_page=2" class="pagination__number">2</a>
                                            <a fs-cmsload-element="page-button" href="?8119cf59_page=3" class="pagination__number">3</a>
                                            <a fs-cmsload-element="page-button" href="?8119cf59_page=4" class="pagination__number">4</a>
                                            <a fs-cmsload-element="page-button" href="?8119cf59_page=5" class="pagination__number">5</a>
                                            <div fs-cmsload-element="page-dots" class="pagination__number-dots" bis_skin_checked="1">...</div>
                                            <a fs-cmsload-element="page-button" href="?8119cf59_page=67" class="pagination__number">67</a> */}
                                </div>

                            </div>
                        </div>
                        </div></div>
                </section>
            </div>
          <Footer />
        </div>
    )
}

export default Bloglist