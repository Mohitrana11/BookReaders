// import React from 'react'

function Card2({ item }) {

  const fixDescription = (description) => {
    if (!description) return "No description available";
    const words = description.split(' ');
    return words.length > 20 ? words.slice(0, 20).join(' ') + '...' : description;
  };
  return (
    <>
      <div className="mt-6">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Self Help
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                Self-help books talk about the connection between dreams and
                personal growth because our dreams can help us understand
                ourselves better, set goals, and find inspiration for positive
                changes in our lives. By looking at the symbols and patterns in
                our dreams, we can gain insights into our thoughts and emotions.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={item.volumeInfo.smallThumbnail?.thumbnail} alt={item.volumeInfo.title}
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {item.volumeInfo.authors}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                   {item.volumeInfo.title}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {fixDescription(item.volumeInfo.description)}
                  </p>
                </div>
              </div>

             <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={item.volumeInfo.smallThumbnail?.thumbnail} alt={item.volumeInfo.title}
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {item.volumeInfo.authors}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                   {item.volumeInfo.title}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {fixDescription(item.volumeInfo.description)}
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1721986136~exp=1721986736~hmac=c525142a37e0f7067e95f4a401078f666cb7f4f73c328837cfda92a332dbbcff"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Great Pyramid of Giza
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1721986136~exp=1721986736~hmac=c525142a37e0f7067e95f4a401078f666cb7f4f73c328837cfda92a332dbbcff"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    San Francisco
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Card2;
