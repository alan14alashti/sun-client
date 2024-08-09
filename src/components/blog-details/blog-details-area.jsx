import React from 'react';
import Image from 'next/image';
// internal
import BlogSidebar from '../blog/blog-postox/blog-sidebar';
import BlogPostCommentForm from '../forms/blog-post-comment-form';
import BlogDetailsAuthor from './blog-details-author';
import BlogDetailsComments from './blog-details-comments';
import PostboxDetailsNav from './postbox-details-nav';
import PostboxDetailsTop from './postbox-details-top';
import shape_line from '@assets/img/blog/details/shape/line.png';
import shape_line_2 from '@assets/img/blog/details/shape/quote.png';
import blog_details_big_img from '@assets/img/blog/details/cobblog.png';
import blog_details_sm_img from '@assets/img/blog/details/blog-details-sm-1.jpg';
import social_data from '@/data/social-data';
import comment_data from '@/data/blog-comment-data';

const BlogDetailsArea = ({blog}) => {
  return (
    <section className="tp-postbox-details-area pb-120 pt-95">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            {/* PostboxDetailsTop */}
            <PostboxDetailsTop blog={blog} />
            {/* PostboxDetailsTop */}
          </div>
          <div className="col-xl-12">
            <div className="tp-postbox-details-thumb">
              <Image src={blog_details_big_img} alt="blog-big-img" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="tp-postbox-details-main-wrapper">
              <div className="tp-postbox-details-content">
                <p className="tp-dropcap">ال ای دی COB از مخفف عبارت Chip on Board و به معنای فناوری تراشه روی برد گرفته شده است و نوعی لامپ ال ‌ای دی می‌باشد. این فناوری، یک فناوری منبع نور سطحی یکپارچه با کارایی بسیار خوب است که در آن، چندین تراشه ال ‌ای دی مستقیما به یک بستر فلزی آینه‌ای با بازتاب بالا متصل می‌شوند. این تراشه ال ‌ای دی بزرگ و فشرده که در میان فیلم سازان و عکاسان بسیار محبوب می‌باشد، روشنایی یکنواختی را ارائه می‌دهد و موجب صرفه جویی در مصرف انرژی می‌شود. در ادامه به نکات مهم قبل از خرید ال ای دی COB می پردازیم.</p>

                <p>تراشه‌های COB معمولا شامل دیود‌هایی به تعداد ۹ یا بیشتر می‌شوند و دارای یک مدار واحد با چندین تماس هستند. این منابع روشنایی، امروزه به دلیل کاهش نور و تنظیم رنگ آسان‌تر، روشنایی بالا و حل مشکل انحراف رنگ و اتلاف گرما به صورت گسترده در روشنایی تجاری و… مورد استفاده قرار می‌گیرد.</p>

                <h4 className="tp-postbox-details-heading">مزایای ال ای دی COB چیست؟</h4>
                <p>ال ای دی COB مزایای مختلفی دارد که در این بخش به آن‌ها می‌پردازیم:</p>

                <h4 className="tp-postbox-details-heading">صرفه جویی در هزینه</h4>
                <p>ماژول‌های ال ای دی COB می‌توانند موجب صرفه جویی در هزینه بسته بندی دستگاه در کاربرد‌های روشنایی واقعی، هزینه تولید ماژول موتور سبک و هزینه توزیع نور ثانویه شوند. علاوه بر این، آن‌ها می‌توانند هزینه کلی را تا حدود ۱۵% در یک سیستم روشنایی با عملکرد یکسان کاهش دهند.</p>
                {/* <div className="tp-postbox-details-desc-thumb text-center">
                  <Image src={blog_details_sm_img} alt="details-sm-img" />
                  <span className="tp-postbox-details-desc-thumb-caption">Gucci’s Women’s Cruise Collection 2023 Lookbook Has Arrived</span>
                </div> */}
                <h4 className="tp-postbox-details-heading">عملکرد قوی</h4>
                <p>ماژول‌های ال ای دی COB توانایی حل مشکلات تابش نور ناشی از ترکیب دستگاه‌های منبع نور گسسته از طریق طراحی و فناوری معقول را دارند. برای اطمینان از عدم کاهش منبع نور، تضمین عمر تجهیزات استفاده شده و بهبود رندر رنگ منبع نور، می‌توانید یک ترکیب تراشه قرمز رنگ اضافه کنید. علاوه بر این، استفاده از لنز‌های شفاف موجی کاهش از دست دادن نور می‌شود و وضوح و کارایی نور را بهبود می‌بخشد.</p>
                <h4 className="tp-postbox-details-heading">کاربرد راحت و تولید انبوه</h4>
                <p>ماژول‌های ال ای دی COB می‌توانند نصب و تولید آسان و راحتی را برای نصاب‌ها و تولید کنندگان روشنایی فراهم کنند و با توجه به سطح فعلی فناوری و تجهیزات پیشرفته، می‌توان آن‌ها را در مقیاس بزرگ تولید کرد.</p>
                <h4 className="tp-postbox-details-heading">صرفه جویی در انرژی و حفاظت از محیط زیست</h4>
                <p>ماژول‌های ال ای دی COB در مقایسه با سایر ال ‌ای دی‌ها، هنگام انتشار روشنایی با لومن مشخص انرژی و کمتری مصرف و گرمای بسیار کمی تولید می‌کنند. به همین دلیل، طول عمر و قابلیت اطمینان بهبود یافته و در مصرف انرژی صرفه جویی می‌شود.</p>
                <h4 className="tp-postbox-details-heading">تشکیل توزیع نور ثانویه</h4>
                <p>با استفاده از ماژول‌های ال ای دی COB می‌توان زاویه تابش نور را به طور دلخواه تنظیم و یک توزیع نور ثانویه ایجاد کرد.</p>
                
                <p>“We’re so glad we’ll be working with you to get your new marketing strategy up and running. I have attached the details of your package. Next you’ll get an email from Jen to schedule your kick-off meeting and be assigned your account rep. During your kick-off meeting, we will introduce your project team, let you know what access we need to start.” </p>

                <div className="tp-postbox-details-quote">
                  <blockquote>
                    <div className="tp-postbox-details-quote-shape">
                      <Image className="tp-postbox-details-quote-shape-1" src={shape_line} alt="shape" />
                      <Image className="tp-postbox-details-quote-shape-2" src={shape_line_2} alt="shape" />
                    </div>
                    <p>There is a way out of every box, a solution to every puzzle its just a matter of finding it.</p>
                    <cite>Shahnewaz Sakil</cite>
                  </blockquote>
                </div>

                <h4 className="tp-postbox-details-heading">Exploring the English Countryside</h4>
                <p>Lorem ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem,nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque euro, pretium quis, sem. Nulla onsequat massa quis enim.</p>

                <div className="tp-postbox-details-list">
                  <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>At vero eos et accusamus et iusto odio.</li>
                    <li>Excepteur sint occaecat cupidatat non proident.</li>
                  </ul>
                </div>
                <p>Rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer cidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae lorem.</p>

                <div className="tp-postbox-details-share-wrapper">
                  <div className="row">
                    <div className="col-xl-8 col-lg-6">
                      <div className="tp-postbox-details-tags tagcloud">
                        <span>Tags:</span>
                        <a href="#">Lifesttyle</a>
                        <a href="#">Awesome</a>
                        <a href="#">Winter</a>
                        <a href="#">Sunglasses</a>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                      <div className="tp-postbox-details-share text-md-end">
                        <span>Share:</span>
                        {social_data.map((s) => (
                          <a href={s.link} className="me-1" target="_blank" key={s.id}>
                            <i className={s.icon}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* PostboxDetailsNav */}
                <PostboxDetailsNav />
                {/* PostboxDetailsNav */}

                {/* author details start */}
                <BlogDetailsAuthor />
                {/* author details end */}

                <div className="tp-postbox-details-comment-wrapper">
                  <h3 className="tp-postbox-details-comment-title">Comments ({comment_data.length})</h3>
                  {/* BlogDetailsComments */}
                  <BlogDetailsComments />
                  {/* BlogDetailsComments */}
                </div>

                <div className="tp-postbox-details-form">
                  <h3 className="tp-postbox-details-form-title">Leave a Reply</h3>
                  <p>Your email address will not be published. Required fields are marked *</p>

                  {/* form start */}
                  <BlogPostCommentForm />
                  {/* form end */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            {/* sidebar start */}
            <BlogSidebar />
            {/* sidebar end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsArea;